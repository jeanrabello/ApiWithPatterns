import AbstractStrategy from '../../../global/abstract/AbstractStrategy';
import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../../../config/auth.js';

export default class LoginWithTokenStrategy extends AbstractStrategy {
	constructor(userRepository, administratorRepository) {
		super();
		this.userRepository = userRepository;
		this.administratorRepository = administratorRepository;
	}

	async execute(data) {
		const token = data.token || data;

		const verifiedToken = await promisify(jwt.verify)(token, authConfig.secret);

		if (!verifiedToken) {
			this.throwError('O token informado não é válido.', 400);
			return;
		}

		const user = await this.userRepository.getById(verifiedToken.id);

		if (!user) {
			this.throwError('Não foi possível recuperar os dados de usuário.', 500);
		}

		const { id, name, email } = user;

		return {
			user: {
				id,
				name,
				email,
				isAdmin: verifiedToken.isAdmin,
			},
			token: jwt.sign(
				{ id, isAdmin: verifiedToken.isAdmin },
				authConfig.secret,
				{
					expiresIn: authConfig.expiresIn,
				}
			),
		};
	}
}
