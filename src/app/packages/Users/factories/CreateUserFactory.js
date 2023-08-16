import AbstractFactory from '../../../global/abstract/AbstractFactory';
import UserRepository from '../../../global/repositories/UserRepository';
import {
	CreateUserStrategy,
	ValidateAgeStrategy,
	VerifyCpfExistenceStrategy,
	VerifyEmailExistenceStrategy,
	VerifyPasswordStrategy,
} from '../strategies';

class CreateUserFactory extends AbstractFactory {
	constructor() {
		super([
			new VerifyEmailExistenceStrategy(UserRepository),
			new VerifyCpfExistenceStrategy(UserRepository),
			new ValidateAgeStrategy(),
			new VerifyPasswordStrategy(),
			new CreateUserStrategy(UserRepository),
		]);
	}
}

export default CreateUserFactory;
