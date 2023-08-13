import AbstractStrategy from '../../../global/abstract/AbstractStrategy';

export default class VerifyUserExistenceByIdStrategy extends AbstractStrategy {
	constructor(userRepository) {
		super();
		this.userRepository = userRepository;
	}

	async execute({ id }) {
		const user = await this.userRepository.count({
			where: { id },
		});

		if (!user) {
			this.throwError('Usuário não encontrado', 400);
			return;
		}
	}
}
