import AbstractController from '../abstract/AbstractController';
import { User } from '../domains';
import {
	CreateUserFactory,
	DeleteUserLogicallyFactory,
	GetUserByCpfFactory,
	GetUserByIdFactory,
	UpdateUserFactory,
	UpdateUserPasswordFactory,
} from '../../packages/Users/factories';

class UserController extends AbstractController {
	constructor() {
		super();
		this.create = this.create.bind(this);
		this.getById = this.getById.bind(this);
		this.getByCpf = this.getByCpf.bind(this);
		this.update = this.update.bind(this);
		this.deleteLogically = this.deleteLogically.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
	}

	async create(req, res, next) {
		try {
			let parsedData = JSON.parse(req.body.userInfo);
			let user = new User({
				...parsedData,
				fileName: req.file ? req.file.originalname : '',
				filePath: req.file ? req.file.path : '',
			});

			const factory = new CreateUserFactory();
			const result = await factory.execute(user, {
				userId: req.userId,
				isAdmin: req.isAdmin,
			});
			res.json(result);
		} catch (error) {
			this.handleError(res, error);
		}
	}

	async update(req, res, next) {
		try {
			let parsedData = JSON.parse(req.body.userInfo);
			let user = new User({
				id: req.userId,
				...parsedData,
				fileName: req.file ? req.file.originalname : '',
				filePath: req.file ? req.file.path : '',
			});

			const factory = new UpdateUserFactory();
			const result = await factory.execute(user, {
				userId: req.userId,
				isAdmin: req.isAdmin,
			});
			res.json(result);
		} catch (error) {
			this.handleError(res, error);
		}
	}

	async updatePassword(req, res, next) {
		try {
			let user = new User(req.body);
			user.newPassword = req.body.newPassword || '';
			user.passwordConfirmation = req.body.passwordConfirmation || '';

			const factory = new UpdateUserPasswordFactory();
			const result = await factory.execute(user, {
				userId: req.userId,
			});
			res.json(result);
		} catch (error) {
			this.handleError(res, error);
		}
	}

	async deleteLogically(req, res, next) {
		try {
			let user = new User(req.body);

			const factory = new DeleteUserLogicallyFactory();
			const result = await factory.execute(user, {
				userId: req.userId,
				isAdmin: req.isAdmin,
			});
			res.json(result);
		} catch (error) {
			this.handleError(res, error);
		}
	}

	async getById(req, res, next) {
		try {
			let user = new User({
				id: req.params.id,
			});

			const factory = new GetUserByIdFactory();
			const result = await factory.execute(user);
			res.json(result);
		} catch (error) {
			this.handleError(res, error);
		}
	}

	async getByCpf(req, res, next) {
		try {
			let user = new User({
				cpf: req.body.cpf,
			});

			const factory = new GetUserByCpfFactory();
			const result = await factory.execute(user);
			res.json(result);
		} catch (error) {
			this.handleError(res, error);
		}
	}
}

export default new UserController();
