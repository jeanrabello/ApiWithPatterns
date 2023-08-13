import AbstractStrategy from '../../../global/abstract/AbstractStrategy';

export default class DeleteUserLogicallyStrategy extends AbstractStrategy {
	constructor(userRepository) {
		super();
		this.userRepository = userRepository;
	}

	async execute({ id }, { userId }) {
		if (id === userId) {
			const deletedUser = await this.userRepository.deleteLogically(id);

			if (deletedUser) {
				return 'Usuário desativado com sucesso.';
			} else {
				return 'Não foi possível desativar o usuário.';
			}
		}
	}
}
