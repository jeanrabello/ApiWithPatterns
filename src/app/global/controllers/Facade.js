import CreateCommand from '../commands/CreateCommand';
import DeleteCommand from '../commands/DeleteCommand';
import DeleteLogicallyCommand from '../commands/DeleteLogicallyCommand';
import GetAllCommand from '../commands/GetAllCommand';
import GetByCodeCommand from '../commands/GetByCodeCommand';
import GetByCpfCommand from '../commands/GetByCpfCommand';
import GetByIdCommand from '../commands/GetByIdCommand';
import GetByNameCommand from '../commands/GetByNameCommand';
import GetByUserIdCommand from '../commands/GetByUserIdCommand';
import UpdateCommand from '../commands/UpdateCommand';
import UpdatePasswordCommand from '../commands/UpdatePasswordCommand';
import RouteControllerRepository from '../repositories/RouteControllerRepository';

export default class Facade {
	constructor() {
		this.findController = this.findController.bind(this);
		this.create = this.create.bind(this);
		this.getById = this.getById.bind(this);
		this.getByCode = this.getByCode.bind(this);
		this.getByCpf = this.getByCpf.bind(this);
		this.update = this.update.bind(this);
		this.delete = this.delete.bind(this);
		this.deleteLogically = this.deleteLogically.bind(this);
		this.getByUserId = this.getByUserId.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
		this.getAll = this.getAll.bind(this);
		this.getByName = this.getByName.bind(this);
	}

	async create(req, res, next) {
		try {
			const controller = await this.findController(req);
			return res.json(await CreateCommand.execute(req, res, controller));
		} catch (error) {
			next(error);
		}
	}

	async getById(req, res, next) {
		try {
			const controller = await this.findController(req);
			const result = await GetByIdCommand.execute(req, res, controller);
			return res.json(result);
		} catch (error) {
			next(error);
		}
	}

	async getByCpf(req, res, next) {
		try {
			const controller = await this.findController(req);
			const result = await GetByCpfCommand.execute(req, res, controller);
			return res.json(result);
		} catch (error) {
			next(error);
		}
	}

	async getByCode(req, res, next) {
		try {
			const controller = await this.findController(req);
			const result = await GetByCodeCommand.execute(req, res, controller);
			return res.json(result);
		} catch (error) {
			next(error);
		}
	}

	async update(req, res, next) {
		try {
			const controller = await this.findController(req);
			const result = await UpdateCommand.execute(req, res, controller);
			return res.json(result);
		} catch (error) {
			next(error);
		}
	}

	async updatePassword(req, res, next) {
		try {
			const controller = await this.findController(req);
			const result = await UpdatePasswordCommand.execute(req, res, controller);
			return res.json(result);
		} catch (error) {
			next(error);
		}
	}

	async delete(req, res, next) {
		try {
			const controller = await this.findController(req);
			const result = await DeleteCommand.execute(req, res, controller);
			return res.json(result);
		} catch (error) {
			next(error);
		}
	}

	async deleteLogically(req, res, next) {
		try {
			const controller = await this.findController(req);
			const result = await DeleteLogicallyCommand.execute(req, res, controller);
			return res.json(result);
		} catch (error) {
			next(error);
		}
	}

	async getByUserId(req, res, next) {
		try {
			const controller = await this.findController(req);
			const result = await GetByUserIdCommand.execute(req, res, controller);
			return res.json(result);
		} catch (error) {
			next(error);
		}
	}

	async getAll(req, res, next) {
		try {
			const controller = await this.findController(req);
			const result = await GetAllCommand.execute(req, res, controller);
			return res.json(result);
		} catch (error) {
			next(error);
		}
	}

	async getByName(req, res, next) {
		try {
			const controller = await this.findController(req);
			const result = await GetByNameCommand.execute(req, res, controller);
			return res.json(result);
		} catch (error) {
			next(error);
		}
	}

	async findController({ baseUrl }) {
		const routeController = await RouteControllerRepository.findController(
			baseUrl
		);

		if (!routeController) {
			throw new Error('Controller not found.');
		}

		return await import(`./${routeController.controller}.js`)
			.then(async (result) => result.default)
			.catch((err) => {
				console.log(err);
				throw new Error('Controller importation.');
			});
	}
}
