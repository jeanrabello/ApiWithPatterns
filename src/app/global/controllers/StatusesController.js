import StatusesRepository from '../repositories/StatusesRepository';

class StatusesController {
	constructor() {}

	async getByCode(data) {
		const code = data.body.code || data.params.code;

		if (!code) {
			throw new Error('Code not informed');
		}

		return await StatusesRepository.getByCode(code);
	}
}

export default new StatusesController();
