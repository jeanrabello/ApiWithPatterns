import AbstractStrategy from '../../../global/abstract/AbstractStrategy';

export default class SuspendUserLogicallyByUserIdStrategy extends AbstractStrategy {
	constructor(userRepository) {
		super();
		this.userRepository = userRepository;
	}

	async execute({ id }) {
		const user = await this.userRepository.suspendLogically(id);

		if (user) {
			return 'Conta suspensa com sucesso.';
		} else {
			return 'Não foi possível suspender a conta do usuário';
		}
	}
}
