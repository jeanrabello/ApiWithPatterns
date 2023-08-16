import AbstractFactory from '../../../global/abstract/AbstractFactory';
import { UserRepository } from '../../../global/repositories';
import {
	VerifyDomainIdParamStrategy,
	VerifyIfAuthenticatedUserIsAdminStrategy,
} from '../../../global/strategies';
import { SuspendUserLogicallyByUserIdStrategy } from '../strategies';

export default class SuspendLogicallyByUserIdFactory extends AbstractFactory {
	constructor() {
		super([
			new VerifyIfAuthenticatedUserIsAdminStrategy(),
			new VerifyDomainIdParamStrategy(),
			new SuspendUserLogicallyByUserIdStrategy(UserRepository),
		]);
	}
}
