import AbstractStrategy from '../../../global/abstract/AbstractStrategy';
import CustomError from '../../../global/classes/CustomError';

export default class VerifyPasswordStrategy extends AbstractStrategy {
	constructor() {
		super();
	}

	async execute(data) {
		const { passwordToHash } = data.body;

		if (!passwordToHash) {
			throw new CustomError('Password not informed', 400);
		}

		if (passwordToHash.length < 8) {
			throw new CustomError('The password must have 8 characters', 400);
		}
	}
}
