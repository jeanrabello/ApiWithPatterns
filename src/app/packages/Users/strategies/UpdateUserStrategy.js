import AbstractStrategy from '../../../global/abstract/AbstractStrategy';

export default class UpdateUserStrategy extends AbstractStrategy {
	constructor(userRepository) {
		super();
		this.userRepository = userRepository;
	}

	async execute(data) {
		const user = await this.userRepository.updateUser(data);

		if (!user) {
			this.throwError('Não foi possível atualizar as informações.', 400);
			return;
		}

		return user;
	}
}
