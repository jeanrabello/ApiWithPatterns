import { Op } from 'sequelize';
import Route from '../models/Route';

class RouteControllerRepository {
	async findController(baseUrl) {
		return await Route.findOne({
			where: {
				path: {
					[Op.eq]: baseUrl,
				},
			},
		});
	}
}

export default new RouteControllerRepository();
