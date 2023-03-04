import AdministratorRepository from '../repositories/AdministratorRepository';

class AdministratorController {
	constructor() {}

	async create(data) {
		const userId = data.body.userId || data.params.userId;

		if (!userId) {
			throw new Error('User ID not informed');
		}

		return await AdministratorRepository.createAdministrator(userId);
	}

	async getByUserId(data) {
		const userId = data.body.userId || data.params.userId;

		if (!userId) {
			throw new Error('User ID not informed');
		}

		return await AdministratorRepository.getByUserId(userId);
	}

	async deleteLogically(data) {
		const userId = data.body.userId || data.params.userId;

		if (!userId) {
			throw new Error('User ID not informed');
		}

		return await AdministratorRepository.deleteLogically(userId);
	}
}

export default new AdministratorController();
