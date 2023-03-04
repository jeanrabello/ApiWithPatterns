'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Administrators', {
			id: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
				primaryKey: true,
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
				allowNull: false,
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
		await queryInterface.dropTable('Administrators');
	},
};
