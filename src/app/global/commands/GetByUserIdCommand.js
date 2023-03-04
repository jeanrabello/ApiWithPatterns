import AbstractCommand from '../abstract/AbstractCommand';

class GetByUserIdCommand extends AbstractCommand {
	async execute(req, res, controller) {
		return await controller.getByUserId(req);
	}
}

export default new GetByUserIdCommand();
