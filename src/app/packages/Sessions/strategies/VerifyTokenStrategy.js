import AbstractStrategy from '../../../global/abstract/AbstractStrategy';

export default class VerifyTokenStrategy extends AbstractStrategy {
	constructor() {
		super();
	}

	async execute(data) {
		const token = data.token || data;

		if (!token) {
			this.throwError('Token não informado.', 400);
			return;
		}
	}
}
