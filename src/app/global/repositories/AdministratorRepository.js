import AbstractRepository from '../abstract/AbstractRepository';
import Administrator from '../models/Administrator';

class AdministratorRepository extends AbstractRepository {
	constructor() {
		super(Administrator);
	}

	async createAdministrator(userId) {
		const activeStatus = await this.getActiveStatusId();

		return await Administrator.create({
			userId: userId,
			statusId: activeStatus,
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
		const inactiveStatus = await this.getInactiveStatusId();

		await Administrator.update(
			{
				statusId: inactiveStatus,
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

export default AdministratorRepository.getInstance();
