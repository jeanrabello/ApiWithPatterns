import AbstractStrategy from '../../../global/abstract/AbstractStrategy';

export default class GetUserByCpfStrategy extends AbstractStrategy {
	constructor(userRepository) {
		super();
		this.userRepository = userRepository;
	}

	async execute({ cpf }) {
		const user = await this.userRepository.getByCpf(cpf);

		if (!user) {
			return 'Nenhum usuário corresponde ao CPF informado.';
		}

		return user;
	}
}
