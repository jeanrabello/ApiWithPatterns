import User from '../models/User';
import StatusesRepository from './StatusesRepository';

class UserRepository {
	constructor() {
		this.createUser = this.createUser.bind(this);
		this.getByCpf = this.getByCpf.bind(this);
		this.updateUser = this.updateUser.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
	}

	async createUser(data) {
		const activeStatus = await StatusesRepository.getByCode('ATI');

		return await User.create({
			firstName: data.firstName,
			lastName: data.lastName,
			birthDate: data.birthDate,
			cpf: data.cpf,
			email: data.email,
			passwordToHash: data.passwordToHash,
			phoneNumber: data.phoneNumber,
			genre: data.genre,
			fileName: data.fileName ? data.fileName : null,
			filePath: data.filePath ? data.filePath : null,
			statusId: activeStatus.id,
		});
	}

	async updateUser(data) {
		await User.update(
			{
				firstName: data.body.firstName,
				lastName: data.body.lastName,
				birthDate: data.body.birthDate,
				email: data.body.email,
				passwordToHash: data.body.passwordToHash,
				phoneNumber: data.body.phoneNumber,
				genre: data.body.genre,
			},
			{
				where: {
					id: data.userId,
				},
			}
		);

		return await this.getById(data.userId);
	}

	async updatePassword(data) {
		const user = await this.getById(data.userId);

		await user.update(
			{
				passwordToHash: data.body.passwordToHash,
			},
			{
				where: {
					id: data.userId,
				},
			}
		);

		return user;
	}

	async deleteLogically(id) {
		const inactiveStatus = await StatusesRepository.getByCode('INA');

		return await User.update(
			{
				statusId: inactiveStatus.id,
			},
			{
				where: {
					id: id,
				},
			}
		);
	}

	async getById(id) {
		return await User.findOne({
			where: {
				id: id,
			},
		});
	}

	async getByCpf(cpf) {
		const activeStatus = await StatusesRepository.getByCode('ATI');

		return await User.findOne({
			where: {
				cpf: cpf,
				statusId: activeStatus.id,
			},
		});
	}

	async getByEmail(email) {
		const activeStatus = await StatusesRepository.getByCode('ATI');

		return await User.findOne({
			where: {
				email: email,
				statusId: activeStatus.id,
			},
		});
	}
}

export default new UserRepository();
