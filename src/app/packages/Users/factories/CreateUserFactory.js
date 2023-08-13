import AbstractFactory from '../../../global/abstract/AbstractFactory';
import UserRepository from '../../../global/repositories/UserRepository';
import CreateUserStrategy from '../strategies/CreateUserStrategy';
import ValidateAgeStrategy from '../strategies/ValidateAgeStrategy';
import VerifyCpfExistenceStrategy from '../strategies/VerifyCpfExistenceStrategy';
import VerifyEmailExistenceStrategy from '../strategies/VerifyEmailExistenceStrategy';
import VerifyPasswordStrategy from '../strategies/VerifyPasswordStrategy';

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
