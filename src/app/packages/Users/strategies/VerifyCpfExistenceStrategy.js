import AbstractStrategy from '../../../global/abstract/AbstractStrategy';
import CustomError from '../../../global/classes/CustomError';
import UserRepository from '../../../global/repositories/UserRepository';

export default class VerifyCpfExistenceStrategy extends AbstractStrategy {
	constructor() {
		super();
	}

	async execute(data) {
		const { cpf } = data;

		if (!cpf) {
			throw new CustomError('CPF not informed', 400);
		}

		const user = await UserRepository.getByCpf(cpf);

		if (user) {
			throw new CustomError('CPF already in use', 400);
		}
	}
}
