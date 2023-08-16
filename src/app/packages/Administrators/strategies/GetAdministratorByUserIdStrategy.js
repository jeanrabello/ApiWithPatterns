import AbstractStrategy from '../../../global/abstract/AbstractStrategy';

export default class GetAdministratorByUserIdStrategy extends AbstractStrategy {
	constructor(adminRepository) {
		super();
		this.adminRepository = adminRepository;
	}

	async execute({ userId }) {
		const admin = await this.adminRepository.findByUserId(userId);

		if (!admin) {
			return 'O usuário informado não é um administrador.';
		}

		return admin;
	}
}
