import AbstractStrategy from '../../../global/abstract/AbstractStrategy';

export default class ValidateAgeStrategy extends AbstractStrategy {
	constructor() {
		super();
	}

	async execute(data) {
		if (
			new Date().getFullYear() - new Date(data.birthDate).getFullYear() <
			18
		) {
			this.throwError('Minimum age: 18 years', 400);
			return;
		}
	}
}
