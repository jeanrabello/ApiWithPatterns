import AbstractCommand from '../abstract/AbstractCommand';

class DeleteCommand extends AbstractCommand {
	async execute(req, res, controller) {
		return await controller.delete(req);
	}
}

export default new DeleteCommand();
