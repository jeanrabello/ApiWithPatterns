import Statuses from '../models/Statuses';

class StatusesRepository {
	constructor() {
		this.getByCode = this.getByCode.bind(this);
	}

	async getByCode(code) {
		return await Statuses.findOne({
			where: {
				code: code.toUpperCase(),
			},
		});
	}
}

export default new StatusesRepository();
