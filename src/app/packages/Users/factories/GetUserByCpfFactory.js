import AbstractFactory from '../../../global/abstract/AbstractFactory';
import { UserRepository } from '../../../global/repositories';
import {
	VerifyRequiredFieldCpfStrategy,
	GetUserByCpfStrategy,
} from '../strategies';

class GetUserByCpfFactory extends AbstractFactory {
	constructor() {
		super([
			new VerifyRequiredFieldCpfStrategy(),
			new GetUserByCpfStrategy(UserRepository),
		]);
	}
}
export default GetUserByCpfFactory;
