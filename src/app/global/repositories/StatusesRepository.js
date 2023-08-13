import AbstractRepository from '../abstract/AbstractRepository';
import Statuses from '../models/Statuses';

class StatusesRepository extends AbstractRepository {
	async getByCode(code) {
		return await Statuses.findOne({
			where: {
				code: code.toUpperCase(),
			},
		});
	}
}

export default StatusesRepository.getInstance();
