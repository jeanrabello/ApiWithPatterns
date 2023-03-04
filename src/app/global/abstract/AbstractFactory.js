export default class AbstractFactory {
	constructor(strategies, data) {
		this.strategies = strategies;
		this.data = data;
		this.error = {};
	}

	async execute() {
		for (const strategy of this.strategies) {
			const error = await strategy.execute(this.data);

			if (error) {
				return error;
			}
		}
	}
}
