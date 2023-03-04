import SessionRepository from '../repositories/SessionRepository.js';

class SessionController {
	constructor() {
		this.create = this.create.bind(this);
		this.delete = this.delete.bind(this);
	}

	async create(req, res) {
		return await SessionRepository.create(req);
	}

	async delete(req, res) {
		return await SessionRepository.delete(req);
	}
}

export default new SessionController();
