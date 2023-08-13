import AbstractFactory from '../../../global/abstract/AbstractFactory';
import AdministratorRepository from '../../../global/repositories/AdministratorRepository';
import UserRepository from '../../../global/repositories/UserRepository';

import { LoginStrategy, VerifyRequiredFieldsStrategy } from '../strategies';

class LoginFactory extends AbstractFactory {
	constructor(data) {
		super(
			[
				new VerifyRequiredFieldsStrategy(),
				new LoginStrategy(UserRepository, AdministratorRepository),
			],
			data
		);
	}
}

export default LoginFactory;
