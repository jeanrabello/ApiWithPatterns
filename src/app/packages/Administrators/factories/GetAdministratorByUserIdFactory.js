import AbstractFactory from '../../../global/abstract/AbstractFactory';
import { AdministratorRepository } from '../../../global/repositories';
import { VerifyDomainUserIdParamStrategy } from '../../../global/strategies';
import { GetAdministratorByUserIdStrategy } from '../strategies';

export default class GetAdministratorByUserIdFactory extends AbstractFactory {
	constructor() {
		super([
			new VerifyDomainUserIdParamStrategy(),
			new GetAdministratorByUserIdStrategy(AdministratorRepository),
		]);
	}
}
