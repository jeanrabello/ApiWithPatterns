import AbstractStrategy from '../../../global/abstract/AbstractStrategy';

export default class GetUserByIdStrategy extends AbstractStrategy {
	constructor(userRepository) {
		super();
		this.userRepository = userRepository;
	}

	async execute({ id }) {
		const user = await this.userRepository.getById(id);

		if (!user) {
			return 'Nenhum usuário corresponde ao ID informado.';
		}

		return user;
	}
}
