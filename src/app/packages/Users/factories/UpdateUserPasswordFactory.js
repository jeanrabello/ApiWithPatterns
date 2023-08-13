import AbstractFactory from '../../../global/abstract/AbstractFactory';
import { UserRepository } from '../../../global/repositories';
import {
	UpdateUserPasswordStrategy,
	PasswordConfirmationStrategy,
	VerifyPasswordStrategy,
	VerifyUserActualPasswordStrategy,
} from '../strategies';

class UpdateUserPasswordFactory extends AbstractFactory {
	constructor() {
		super([
			new VerifyPasswordStrategy(),
			new VerifyUserActualPasswordStrategy(UserRepository),
			new PasswordConfirmationStrategy(),
			new UpdateUserPasswordStrategy(UserRepository),
		]);
	}
}

export default UpdateUserPasswordFactory;
