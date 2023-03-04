'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Users', {
			id: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
				primaryKey: true,
				allowNull: false,
			},
			firstName: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			lastName: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			birthDate: {
				type: Sequelize.DATEONLY,
				allowNull: false,
			},
			cpf: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			phoneNumber: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			genre: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			fileName: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			filePath: {
				type: Sequelize.STRING,
				allowNull: true,
				unique: true,
			},
			statusId: {
				type: Sequelize.UUID,
				references: {
					model: 'Statuses',
					key: 'id',
					onUpdate: 'CASCADE',
					onDelete: 'SET NULL',
				},
				allowNull: true,
			},
			createdAt: {
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
				allowNull: false,
			},
			updatedAt: {
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
				allowNull: false,
			},
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Users');
	},
};
