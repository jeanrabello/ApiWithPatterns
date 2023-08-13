import AbstractStrategy from '../../../global/abstract/AbstractStrategy';

export default class VerifyPasswordStrategy extends AbstractStrategy {
	constructor() {
		super();
	}

	async execute({ password }) {
		if (!password) {
			this.throwError('Password not informed', 400);
			return;
		}

		if (password.length < 8) {
			this.throwError('The password must have 8 characters', 400);
			return;
		}
	}
}
