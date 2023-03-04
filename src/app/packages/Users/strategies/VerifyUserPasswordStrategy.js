import AbstractStrategy from '../../../global/abstract/AbstractStrategy';
import UserRepository from '../../../global/repositories/UserRepository';

export default class VerifyUserPasswordStrategy extends AbstractStrategy {
	constructor() {
		super();
	}

	async execute(data) {
		const { password } = data.body;
		const user = await UserRepository.getById(data.userId);

		if (!(await user.checkPassword(password))) {
			throw new Error('Actual password wrong.');
		}
	}
}
