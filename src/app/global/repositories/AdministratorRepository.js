import Administrator from '../models/Administrator';
import StatusesRepository from './StatusesRepository';

class AdministratorRepository {
	constructor() {
		this.createAdministrator = this.createAdministrator.bind(this);
		this.getByUserId = this.getByUserId.bind(this);
		this.deleteLogically = this.deleteLogically.bind(this);
	}

	async createAdministrator(userId) {
		const activeStatus = await StatusesRepository.getByCode('ATI');

		return await Administrator.create({
			userId: userId,
			statusId: activeStatus.id,
		});
	}

	async getByUserId(userId) {
		return await Administrator.findOne({
			where: {
				userId: userId,
			},
		});
	}

	async deleteLogically(userId) {
		const inactiveStatus = await StatusesRepository.getByCode('INA');

		await Administrator.update(
			{
				statusId: inactiveStatus.id,
			},
			{
				where: {
					userId: userId,
				},
			}
		);

		return await this.getByUserId(userId);
	}
}

export default new AdministratorRepository();
