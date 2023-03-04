import AbstractStrategy from '../../../global/abstract/AbstractStrategy';

export default class PasswordConfirmationStrategy extends AbstractStrategy {
	constructor() {
		super();
	}

	async execute(data) {
		const { passwordToHash, passwordConfirmation } = data.body;

		if (passwordToHash !== passwordConfirmation) {
			throw new Error('Password do not match');
		}
	}
}
