'use strict';

const uuid = require('uuid');
const { Op } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Statuses',
			[
				{
					id: uuid.v4(),
					code: 'ATI',
					description: 'Ativo',
				},
				{
					id: uuid.v4(),
					code: 'INA',
					description: 'Inativo',
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete(
			'Statuses',
			[
				{
					code: {
						[Op.in]: ['ATI', 'INA'],
					},
				},
			],
			{}
		);
	},
};
