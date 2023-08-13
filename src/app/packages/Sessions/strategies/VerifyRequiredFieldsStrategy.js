import AbstractStrategy from '../../../global/abstract/AbstractStrategy';

export default class VerifyRequiredFieldsStrategy extends AbstractStrategy {
	constructor() {
		super();
	}

	async execute(data) {
		if (!data.email) {
			this.throwError('Email não informado.', 400);
			return;
		}

		if (!data.password) {
			this.throwError('Senha não informada.', 400);
			return;
		}
	}
}
