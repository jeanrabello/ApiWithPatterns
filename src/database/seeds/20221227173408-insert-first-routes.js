'use strict';

const uuid = require('uuid');
const { Op } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Routes',
			[
				{
					id: uuid.v4(),
					controller: 'StatusesController',
					path: '/app/status',
				},
				{
					id: uuid.v4(),
					controller: 'UserController',
					path: '/app/user',
				},
				{
					id: uuid.v4(),
					controller: 'AdministratorController',
					path: '/app/admin',
				},
				{
					id: uuid.v4(),
					controller: 'SessionController',
					path: '/app/session',
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete(
			'Routes',
			[
				{
					path: {
						[Op.in]: ['/app/status', '/app/user', '/app/admin'],
					},
				},
			],
			{}
		);
	},
};
