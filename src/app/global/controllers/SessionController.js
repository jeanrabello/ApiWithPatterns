import AbstractController from '../abstract/AbstractController.js';
import LoginFactory from '../../packages/Sessions/factories/LoginFactory.js';
import User from '../domains/User.js';

class SessionController extends AbstractController {
	constructor() {
		super();
		this.login = this.login.bind(this);
	}

	async login(req, res) {
		try {
			let user = new User(req.body);
			const factory = new LoginFactory();
			const result = await factory.execute(user);
			res.json(result);
		} catch (error) {
			this.handleError(res, error);
		}
	}
}

export default new SessionController();
