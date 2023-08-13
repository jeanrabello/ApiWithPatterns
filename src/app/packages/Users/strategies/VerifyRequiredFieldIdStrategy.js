import AbstractStrategy from '../../../global/abstract/AbstractStrategy';

export default class VerifyRequiredFieldIdStrategy extends AbstractStrategy {
	constructor() {
		super();
	}

	async execute({ id }) {
		if (!id) {
			this.throwError('Id não informado', 400);
			return;
		}
	}
}
