import Sequelize, { Model } from 'sequelize';

class Route extends Model {
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
				controller: Sequelize.STRING,
				path: Sequelize.STRING,
			},
			{
				sequelize,
				tableName: 'Routes',
				modelName: 'Routes',
			}
		);

		return this;
	}

	static associate(model) {}
}

export default Route;
