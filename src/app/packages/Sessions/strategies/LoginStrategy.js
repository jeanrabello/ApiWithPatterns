import AbstractStrategy from '../../../global/abstract/AbstractStrategy';
import jwt from 'jsonwebtoken';
import authConfig from '../../../../config/auth.js';

export default class LoginStrategy extends AbstractStrategy {
	constructor(userRepository, administratorRepository) {
		super();
		this.userRepository = userRepository;
		this.administratorRepository = administratorRepository;
	}

	async execute(data) {
		const { email, password } = data;
		const user = await this.userRepository.getByEmail(email);

		if (!user) {
			this.throwError('Usuário/senha incorretos');
		}

		if (!(await user.checkPassword(password))) {
			this.throwError('Usuário/senha incorretos');
		}

		const isAdmin = await this.administratorRepository.getByUserId(user.id);

		const { id, name } = user;

		return {
			user: {
				id,
				name,
				email,
				isAdmin: isAdmin ? true : false,
			},
			token: jwt.sign(
				{ id, isAdmin: isAdmin ? true : false },
				authConfig.secret,
				{
					expiresIn: authConfig.expiresIn,
				}
			),
		};
	}
}
