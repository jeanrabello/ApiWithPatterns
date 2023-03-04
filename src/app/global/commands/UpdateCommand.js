import AbstractCommand from '../abstract/AbstractCommand';

class UpdateCommand extends AbstractCommand {
	async execute(req, res, controller) {
		return await controller.update(req);
	}
}

export default new UpdateCommand();
