import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
	static init(sequelize) {
		super.init(
			{
				id: {
					type: Sequelize.UUID,
					defaultValue: Sequelize.UUIDV4,
					primaryKey: true,
					autoIncrement: false,
					allowNull: false,
				},
				firstName: Sequelize.STRING,
				lastName: Sequelize.STRING,
				birthDate: Sequelize.DATEONLY,
				cpf: Sequelize.STRING,
				email: Sequelize.STRING,
				password: Sequelize.STRING,
				passwordToHash: Sequelize.VIRTUAL,
				phoneNumber: Sequelize.STRING,
				genre: Sequelize.STRING,
				filePath: Sequelize.STRING,
				fileName: Sequelize.STRING,
				statusId: {
					type: Sequelize.UUID,
					references: {
						model: 'Statuses',
						key: 'id',
						onUpdate: 'CASCADE',
						onDelete: 'SET NULL',
					},
				},
			},
			{
				sequelize,
				tableName: 'Users',
				modelName: 'User',
			}
		);

		this.addHook('beforeSave', async (user) => {
			if (user.passwordToHash) {
				user.password = await bcrypt.hash(user.passwordToHash, 8);
			}
		});

		return this;
	}

	checkPassword(password) {
		return bcrypt.compare(password, this.password);
	}

	static associate(models) {
		this.belongsTo(models.Status, {
			foreignKey: 'statusId',
			as: 'status',
		});
	}
}

export default User;
