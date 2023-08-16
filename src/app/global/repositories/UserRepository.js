import AbstractRepository from '../abstract/AbstractRepository';
import User from '../models/User';

class UserRepository extends AbstractRepository {
	constructor() {
		super(User);
	}

	async createUser(data) {
		const activeStatus = await this.getActiveStatusId();

		return await User.create({
			firstName: data.firstName,
			lastName: data.lastName,
			birthDate: data.birthDate,
			cpf: data.cpf,
			email: data.email,
			password: data.password,
			phoneNumber: data.phoneNumber,
			genre: data.genre,
			fileName: data.fileName ? data.fileName : null,
			filePath: data.filePath ? data.filePath : null,
			statusId: activeStatus,
		});
	}

	async updateUser(data) {
		await User.update(
			{
				firstName: data.firstName,
				lastName: data.lastName,
				birthDate: data.birthDate,
				email: data.email,
				phoneNumber: data.phoneNumber,
				genre: data.genre,
			},
			{
				where: {
					id: data.id,
				},
			}
		);

		return await this.getById(data.id);
	}

	async updatePassword(userId, password) {
		return await User.update(
			{
				password,
			},
			{
				where: {
					id: userId,
				},
			}
		);
	}

	async deleteLogically(id) {
		const inactiveStatus = await this.getInactiveStatusId();

		return await User.update(
			{
				statusId: inactiveStatus,
			},
			{
				where: {
					id,
				},
			}
		);
	}

	async getById(id) {
		return await User.findOne({
			attributes: [
				'id',
				'firstName',
				'lastName',
				'birthDate',
				'cpf',
				'email',
				'phoneNumber',
				'genre',
				'fileName',
				'filePath',
			],
			where: {
				id: id,
			},
		});
	}

	async getByCpf(cpf) {
		const activeStatus = await this.getActiveStatusId();

		return await User.findOne({
			attributes: [
				'id',
				'firstName',
				'lastName',
				'birthDate',
				'cpf',
				'email',
				'phoneNumber',
				'genre',
				'fileName',
				'filePath',
			],
			where: {
				cpf: cpf,
				statusId: activeStatus,
			},
		});
	}

	async getByEmail(email) {
		const activeStatus = await this.getActiveStatusId();

		return await User.findOne({
			where: {
				email: email,
				statusId: activeStatus,
			},
		});
	}

	async suspendLogically(id) {
		const suspendedStatus = await this.getSuspendedStatusId();

		return await User.update(
			{
				statusId: suspendedStatus,
			},
			{
				where: {
					id,
				},
			}
		);
	}
}

export default UserRepository.getInstance();
