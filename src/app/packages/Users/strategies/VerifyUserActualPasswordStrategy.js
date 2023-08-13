import AbstractStrategy from '../../../global/abstract/AbstractStrategy';

export default class VerifyUserPasswordStrategy extends AbstractStrategy {
	constructor(userRepository) {
		super();
		this.userRepository = userRepository;
	}

	async execute({ password }, { userId }) {
		const user = await this.userRepository.getById(userId);

		if (!(await user.checkPassword(password))) {
			this.throwError('Senha atual incorreta.');
			return;
		}
	}
}
