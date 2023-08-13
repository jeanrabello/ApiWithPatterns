import AbstractStrategy from '../../../global/abstract/AbstractStrategy';

export default class VerifyCpfExistenceStrategy extends AbstractStrategy {
	constructor(userRepository) {
		super();
		this.userRepository = userRepository;
	}

	async execute(data) {
		const { cpf } = data;

		if (!cpf) {
			this.throwError('CPF not informed', 400);
			return;
		}

		const user = await this.userRepository.getByCpf(cpf);

		if (user) {
			this.throwError('CPF already in use', 400);
			return;
		}
	}
}
