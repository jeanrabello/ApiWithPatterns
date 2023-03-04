import AbstractCommand from '../abstract/AbstractCommand';

class GetByNameCommand extends AbstractCommand {
	async execute(req, res, controller) {
		return await controller.getByName(req);
	}
}

export default new GetByNameCommand();
