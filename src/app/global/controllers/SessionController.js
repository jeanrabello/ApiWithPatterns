import AbstractController from '../abstract/AbstractController.js';
import LoginFactory from '../../packages/Sessions/factories/LoginFactory.js';
import LoginWithTokenFactory from '../../packages/Sessions/factories/LoginWithTokenFactory.js';
import User from '../domains/User.js';

class SessionController extends AbstractController {
	constructor() {
		super();
		this.login = this.login.bind(this);
		this.loginWithtoken = this.loginWithtoken.bind(this);
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

	async loginWithtoken(req, res) {
		try {
			const { token } = req.body;
			const factory = new LoginWithTokenFactory();
			const result = await factory.execute(token);
			res.json(result);
		} catch (error) {
			this.handleError(res, error);
		}
	}
}

export default new SessionController();
