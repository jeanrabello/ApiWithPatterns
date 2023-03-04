import AbstractCommand from '../abstract/AbstractCommand';

class CreateCommand extends AbstractCommand {
	async execute(req, res, controller) {
		return await controller.create(req, res);
	}
}

export default new CreateCommand();
