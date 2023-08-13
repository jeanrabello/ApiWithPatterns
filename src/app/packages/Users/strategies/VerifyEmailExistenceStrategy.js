import AbstractStrategy from '../../../global/abstract/AbstractStrategy';

export default class VerifyEmailExistenceStrategy extends AbstractStrategy {
	constructor(userRepository) {
		super();
		this.userRepository = userRepository;
	}

	async execute(data) {
		const { email } = data;

		if (!email) {
			this.throwError('Email address not informed', 400);
			return error;
		}

		const user = await this.userRepository.getByEmail(email);

		if (user) {
			if (data.id && data.id !== user.id) {
				this.throwError('Email address already in use', 400);
				return error;
			}
		}
	}
}
