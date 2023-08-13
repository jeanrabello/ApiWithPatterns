import AbstractFactory from '../../../global/abstract/AbstractFactory';
import { UserRepository } from '../../../global/repositories';
import {
	ValidateAgeStrategy,
	VerifyEmailExistenceStrategy,
	VerifyPasswordStrategy,
	VerifyUserExistenceByIdStrategy,
	UpdateUserStrategy,
} from '../strategies';

class UpdateUserFactory extends AbstractFactory {
	constructor() {
		super([
			new VerifyEmailExistenceStrategy(UserRepository),
			new ValidateAgeStrategy(),
			new VerifyPasswordStrategy(),
			new VerifyUserExistenceByIdStrategy(UserRepository),
			new UpdateUserStrategy(UserRepository),
		]);
	}
}
export default UpdateUserFactory;
