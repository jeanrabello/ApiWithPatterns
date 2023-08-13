import jwt from 'jsonwebtoken';

import authConfig from '../../../config/auth.js';
import AdministratorRepository from '../repositories/AdministratorRepository.js';
import UserRepository from './UserRepository.js';
import AbstractRepository from '../abstract/AbstractRepository.js';

class SessionRepository extends AbstractRepository {
	constructor() {
		super();
		this.create = this.create.bind(this);
	}

	async create(data) {
		const { email, password } = data.body;

		const user = await UserRepository.getByEmail(email);

		if (!user) {
			throw new Error('User not Found.');
		}

		if (!(await user.checkPassword(password))) {
			throw new Error('Incorrect password.');
		}

		const isAdmin = await AdministratorRepository.getByUserId(user.id);

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

export default SessionRepository.getInstance();
