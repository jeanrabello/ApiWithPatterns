import AbstractStrategy from '../../../global/abstract/AbstractStrategy';

export default class CreateUserStrategy extends AbstractStrategy {
	constructor(userRepository) {
		super();
		this.userRepository = userRepository;
	}

	async execute(data) {
		const user = await this.userRepository.createUser(data);

		if (!user) {
			this.throwError('Não foi possível criar o usuário');
			return;
		}

		return user;
	}
}
