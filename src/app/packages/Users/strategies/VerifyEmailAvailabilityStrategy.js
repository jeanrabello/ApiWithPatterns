import AbstractStrategy from '../../../global/abstract/AbstractStrategy';
import UserRepository from '../../../global/repositories/UserRepository';

export default class VerifyEmailAvailabilityStrategy extends AbstractStrategy {
	constructor() {
		super();
	}

	async execute(data) {
		const { email } = data.body;

		const user = await UserRepository.getByEmail(email);
		const loggedUser = await UserRepository.getById(data.userId);

		if (user && user.id != loggedUser.id) {
			throw new Error('Email address already in use.');
		}
	}
}
