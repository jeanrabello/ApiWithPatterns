import AbstractCommand from '../abstract/AbstractCommand';

class GetByCodeCommand extends AbstractCommand {
	async execute(req, res, controller) {
		return await controller.getByCode(req);
	}
}

export default new GetByCodeCommand();
