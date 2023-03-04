import AbstractCommand from '../abstract/AbstractCommand';

class DeleteLogicallyCommand extends AbstractCommand {
	async execute(req, res, controller) {
		return await controller.deleteLogically(req);
	}
}

export default new DeleteLogicallyCommand();
