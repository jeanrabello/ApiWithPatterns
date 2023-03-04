import AbstractStrategy from '../../../global/abstract/AbstractStrategy';
import CustomError from '../../../global/classes/CustomError';
import UserRepository from '../../../global/repositories/UserRepository';

export default class VerifyEmailExistenceStrategy extends AbstractStrategy {
	constructor() {
		super();
	}

	async execute(data) {
		const { email } = data;

		if (!email) {
			throw new CustomError('Email address not informed', 400);
		}

		const user = await UserRepository.getByEmail(email);

		if (user) {
			throw new CustomError('Email address already in use', 400);
		}
	}
}
