import AbstractStrategy from '../../../global/abstract/AbstractStrategy';

export default class VerifyRequiredFieldCpfStrategy extends AbstractStrategy {
	constructor() {
		super();
	}

	async execute({ cpf }) {
		if (!cpf) {
			this.throwError('CPF não informado', 400);
			return;
		}
	}
}
