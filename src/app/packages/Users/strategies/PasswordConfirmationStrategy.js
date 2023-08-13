import AbstractStrategy from '../../../global/abstract/AbstractStrategy';

export default class PasswordConfirmationStrategy extends AbstractStrategy {
	constructor() {
		super();
	}

	async execute({ newPassword, passwordConfirmation }) {
		if (newPassword !== passwordConfirmation) {
			this.throwError('Senhas não coincidem.');
			return;
		}
	}
}
