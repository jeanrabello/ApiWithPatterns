import AbstractCommand from '../abstract/AbstractCommand';

class GetByIdCommand extends AbstractCommand {
	async execute(req, res, controller) {
		return await controller.getById(req);
	}
}

export default new GetByIdCommand();
