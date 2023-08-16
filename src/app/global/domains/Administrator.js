import { User, Status } from './';

export default class Administrator {
	constructor({
		id = null,
		userId = '',
		statusId = '',
		user = {},
		status = {},
		createdAt = new Date(),
		updatedAt = new Date(),
	} = {}) {
		this.id = id ? id : null;
		this.user = new User(user);
		this.userId = userId ? userId : null;
		this.status = new Status(status);
		this.statusId = statusId ? statusId : null;
		this.createdAt = new Date(createdAt);
		this.updatedAt = new Date(updatedAt);
	}
}
