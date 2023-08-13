import AbstractFactory from '../../../global/abstract/AbstractFactory';
import { UserRepository } from '../../../global/repositories';
import {
	VerifyRequiredFieldIdStrategy,
	GetUserByIdStrategy,
} from '../strategies';

class GetUserByIdFactory extends AbstractFactory {
	constructor() {
		super([
			new VerifyRequiredFieldIdStrategy(),
			new GetUserByIdStrategy(UserRepository),
		]);
	}
}
export default GetUserByIdFactory;
