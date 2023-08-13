import { STATUS } from '../../constants';
import StatusesRepository from '../repositories/StatusesRepository';

export default class AbstractRepository {
	constructor(model) {
		this.model = model;
	}

	static getInstance() {
		if (!this.instance) {
			this.instance = new this();
		}
		return this.instance;
	}

	async getActiveStatusId() {
		return (await StatusesRepository.getByCode(STATUS.ACTIVE)).id;
	}

	async getInactiveStatusId() {
		return (await StatusesRepository.getByCode(STATUS.INACTIVE)).id;
	}

	async getSuspendedStatusId() {
		return (await StatusesRepository.getByCode(STATUS.SUSPENDED)).id;
	}

	async count(options) {
		return await this.model.count(options);
	}
}
