import AbstractCommand from '../abstract/AbstractCommand';

class UpdatePasswordCommand extends AbstractCommand {
	async execute(req, res, controller) {
		return await controller.updatePassword(req, res);
	}
}

export default new UpdatePasswordCommand();
