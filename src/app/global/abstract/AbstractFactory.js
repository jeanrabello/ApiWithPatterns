import CustomError from '../domains/CustomError';

export default class AbstractFactory {
	constructor(strategies, data) {
		this.strategies = strategies;
		this.error = {};
	}

	async execute(data, loggedUserInfo) {
		let result;
		for (const strategy of this.strategies) {
			if (result instanceof CustomError) {
				throw result;
			}
			result = await strategy.execute(data, loggedUserInfo);
		}

		return result;
	}
}
