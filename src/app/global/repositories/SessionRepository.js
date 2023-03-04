import jwt from 'jsonwebtoken';

import authConfig from '../../../config/auth.js';
import AdministratorRepository from '../repositories/AdministratorRepository.js';
import UserRepository from './UserRepository.js';

class SessionRepository {
	constructor() {
		this.create = this.create.bind(this);
		this.delete = this.delete.bind(this);
	}

	async create(data) {
		console.log(data.body);
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

	async delete(data) {
		// TODO: Logout implementation
	}
}

export default new SessionRepository();
