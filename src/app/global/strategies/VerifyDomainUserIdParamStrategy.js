import AbstractStrategy from '../abstract/AbstractStrategy';

export default class VerifyDomainUserIdParamStrategy extends AbstractStrategy {
	constructor() {
		super();
	}

	async execute({ userId }) {
		if (!userId) {
			this.throwError('ID do usuário não informado.', 400);
			return;
		}
	}
}
