import AbstractFactory from '../../../global/abstract/AbstractFactory';
import { UserRepository } from '../../../global/repositories';
import {
	VerifyUserExistenceByIdStrategy,
	DeleteUserLogicallyStrategy,
} from '../strategies';

class DeleteUserLogicallyFactory extends AbstractFactory {
	constructor() {
		super([
			new VerifyUserExistenceByIdStrategy(UserRepository),
			new DeleteUserLogicallyStrategy(UserRepository),
		]);
	}
}

export default DeleteUserLogicallyFactory;
