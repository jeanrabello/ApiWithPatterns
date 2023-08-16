import {
	CreateAdminFactory,
	SuspendLogicallyByUserIdFactory,
	GetAdministratorByUserIdFactory,
} from '../../packages/Administrators/factories';
import AbstractController from '../abstract/AbstractController';
import { Administrator, User } from '../domains';

class AdministratorController extends AbstractController {
	constructor() {
		super();
		this.create = this.create.bind(this);
		this.getByUserId = this.getByUserId.bind(this);
		this.deleteLogically = this.deleteLogically.bind(this);
	}

	async create(req, res, next) {
		try {
			let admin = new Administrator(req.body);

			const factory = new CreateAdminFactory();
			const result = await factory.execute(admin, {
				userId: req.userId,
				isAdmin: req.isAdmin,
			});
			res.json(result);
		} catch (error) {
			this.handleError(res, error);
		}
	}

	async getByUserId(req, res, next) {
		try {
			let admin = new Administrator(req.params);

			const factory = new GetAdministratorByUserIdFactory();
			const result = await factory.execute(admin, {
				userId: req.userId,
				isAdmin: req.isAdmin,
			});
			res.json(result);
		} catch (error) {
			this.handleError(res, error);
		}
	}

	async deleteLogically(req, res, next) {
		try {
			let user = new User(req.params);

			const factory = new SuspendLogicallyByUserIdFactory();
			const result = await factory.execute(user, {
				userId: req.userId,
				isAdmin: req.isAdmin,
			});
			res.json(result);
		} catch (error) {
			this.handleError(res, error);
		}
	}
}

export default new AdministratorController();
