import StatusRepository from '../repositories/StatusRepository';

class StatusesController {
	constructor() {}

	async getByCode(data) {
		const code = data.body.code || data.params.code;

		if (!code) {
			throw new Error('Code not informed');
		}

		return await StatusRepository.getByCode(code);
	}
}

export default new StatusesController();
