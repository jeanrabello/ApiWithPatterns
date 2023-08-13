import AbstractStrategy from '../abstract/AbstractStrategy';

export default class VerifyIfAuthenticatedUserIsAdminStrategy extends AbstractStrategy {
	constructor(userRepository) {
		super();
		this.userRepository = userRepository;
	}

	async execute(_, { isAdmin }) {
		if (!isAdmin) {
			this.throwError(
				'O usuário autenticado não possui permissões administrativas.',
				400
			);
			return;
		}
	}
}
