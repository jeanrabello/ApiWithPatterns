import AbstractStrategy from '../../../global/abstract/AbstractStrategy';

export default class VerifyUserExistenceByIdStrategy extends AbstractStrategy {
	constructor(userRepository) {
		super();
		this.userRepository = userRepository;
	}

	async execute({ userId }) {
		const user = this.userRepository.findById(userId);

		if (!user) {
			this.throwError('Usuário não encontrado.');
			return;
		}
	}
}
