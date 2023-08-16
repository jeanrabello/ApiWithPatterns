export default class Status {
	constructor({
		id = null,
		code = '',
		description = '',
		createdAt = new Date(),
		updatedAt = new Date(),
	} = {}) {
		this.id = id ? id : null;
		this.code = code;
		this.description = description;
		this.createdAt = new Date(createdAt);
		this.updatedAt = new Date(updatedAt);
	}
}
