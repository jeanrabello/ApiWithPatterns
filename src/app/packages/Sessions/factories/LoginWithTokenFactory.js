import AbstractFactory from '../../../global/abstract/AbstractFactory';
import UserRepository from '../../../global/repositories/UserRepository';

import { LoginWithTokenStrategy, VerifyTokenStrategy } from '../strategies';

class LoginWithTokenFactory extends AbstractFactory {
	constructor() {
		super([
			new VerifyTokenStrategy(),
			new LoginWithTokenStrategy(UserRepository),
		]);
	}
}

export default LoginWithTokenFactory;
