import AbstractStrategy from '../../../global/abstract/AbstractStrategy';

export default class VerifyRequiredFieldsToCreateAdminStrategy extends AbstractStrategy {
	constructor() {
		super();
	}

	async execute({ userId }) {
		if (!userId) {
			this.throwError('Usuário não informado.');
			return;
		}
	}
}
