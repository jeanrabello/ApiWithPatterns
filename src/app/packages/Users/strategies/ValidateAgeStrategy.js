import AbstractStrategy from '../../../global/abstract/AbstractStrategy';
import CustomError from '../../../global/classes/CustomError';

export default class ValidateAgeStrategy extends AbstractStrategy {
	constructor() {
		super();
	}

	async execute(data) {
		if (
			new Date().getFullYear() - new Date(data.birthDate).getFullYear() <
			18
		) {
			throw new CustomError('Minimum age: 18 years', 400);
		}
	}
}
