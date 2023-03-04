import Sequelize, { Model } from 'sequelize';

class Administrator extends Model {
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
				userId: {
					type: Sequelize.UUID,
					references: {
						model: 'Users',
						key: 'id',
						onUpdate: 'CASCADE',
						onDelete: 'CASCADE',
					},
				},
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
				tableName: 'Administrators',
				modelName: 'Administrator',
			}
		);
		return this;
	}

	static associate(models) {
		this.belongsTo(models.User, {
			foreignKey: 'userId',
			as: 'user',
		});

		this.belongsTo(models.Status, {
			foreignKey: 'statusId',
			as: 'status',
		});
	}
}

export default Administrator;
