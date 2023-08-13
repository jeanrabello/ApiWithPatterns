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
			if (user.password) {
				user.password = await bcrypt.hash(user.password, 8);
			}
		});

		this.addHook('beforeBulkUpdate', async ({ attributes }) => {
			if (attributes.password) {
				attributes.password = await bcrypt.hash(attributes.password, 8);
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
