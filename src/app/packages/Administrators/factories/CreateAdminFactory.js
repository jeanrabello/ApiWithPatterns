import AbstractFactory from '../../../global/abstract/AbstractFactory';
import {
	AdministratorRepository,
	UserRepository,
} from '../../../global/repositories';
import VerifyIfAuthenticatedUserIsAdminStrategy from '../../../global/strategies/VerifyIfAuthenticatedUserIsAdminStrategy';
import {
	VerifyRequiredFieldsToCreateAdminStrategy,
	VerifyUserExistenceByIdStrategy,
	CreateAdminStrategy,
} from '../strategies';

class CreateAdminFactory extends AbstractFactory {
	constructor() {
		super([
			new VerifyIfAuthenticatedUserIsAdminStrategy(),
			new VerifyRequiredFieldsToCreateAdminStrategy(),
			new VerifyUserExistenceByIdStrategy(UserRepository),
			new CreateAdminStrategy(AdministratorRepository),
		]);
	}
}

export default CreateAdminFactory;
