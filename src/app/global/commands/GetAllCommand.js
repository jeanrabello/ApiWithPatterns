import AbstractCommand from '../abstract/AbstractCommand';

class GetAllCommand extends AbstractCommand {
	async execute(req, res, controller) {
		return await controller.getAll(req);
	}
}

export default new GetAllCommand();
