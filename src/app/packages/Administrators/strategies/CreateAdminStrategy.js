import AbstractStrategy from '../../../global/abstract/AbstractStrategy';

export default class CreateAdminStrategy extends AbstractStrategy {
	constructor(adminRepository) {
		super();
		this.adminRepository = adminRepository;
	}

	async execute({ userId }) {
		const admin = this.adminRepository.createAdministrator(userId);

		if (!admin) {
			this.throwError('Usuário não encontrado.');
			return;
		}

		return admin;
	}
}
