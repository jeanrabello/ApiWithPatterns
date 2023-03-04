export default class AbstractStrategy {
	constructor() {}

	async execute(req, res) {
		throw new Error('You have to implement the method execute');
	}
}
