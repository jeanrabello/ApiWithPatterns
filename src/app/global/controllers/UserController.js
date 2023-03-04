import CreateUserFactory from '../../packages/Users/factories/CreateUserFactory';
import UpdateUserFactory from '../../packages/Users/factories/UpdateUserFactory';
import UpdateUserPasswordFactory from '../../packages/Users/factories/UpdateUserPasswordFactory';
import UserRepository from '../repositories/UserRepository';
import SessionController from './SessionController';

class UserController {
	constructor() {
		this.create = this.create.bind(this);
		this.getById = this.getById.bind(this);
		this.getByCpf = this.getByCpf.bind(this);
		this.update = this.update.bind(this);
		this.deleteLogically = this.deleteLogically.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
	}

	async create(data) {
		let parsedData = JSON.parse(data.body.userInfo);
		const factory = new CreateUserFactory(parsedData);
		await factory.execute();

		if (data.file) {
			parsedData['fileName'] = data.file.originalname;
			parsedData['filePath'] = data.file.path;
		}

		return await UserRepository.createUser(parsedData);
	}

	async update(data) {
		const factory = new UpdateUserFactory(data);
		await factory.execute();

		return await UserRepository.updateUser(data);
	}

	async updatePassword(data) {
		const factory = new UpdateUserPasswordFactory(data);
		await factory.execute();

		return await UserRepository.updatePassword(data);
	}

	async deleteLogically(data) {
		if (!data.userId) {
			throw new Error('You need to send the required informations.');
		}

		await UserRepository.deleteLogically(data.userId);
		await SessionController.delete(data);

		return null;
	}

	async getById(data) {
		const id = data.body.id || data.params.id;

		if (!id) {
			throw new Error('ID not informed');
		}

		return await UserRepository.getById(id);
	}

	async getByCpf(data) {
		const cpf = data.body.cpf || data.params.cpf;

		if (!cpf) {
			throw new Error('Cpf not informed');
		}

		return await UserRepository.getByCpf(cpf);
	}
}

export default new UserController();
