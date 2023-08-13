export default class User {
	constructor({
		id = null,
		firstName = '',
		lastName = '',
		birthDate = new Date(),
		cpf = '',
		email = '',
		password = '',
		phoneNumber = '',
		genre = '',
		fileName = '',
		filePath = '',
		status = null,
		createdAt = new Date(),
		updatedAt = new Date(),
	} = {}) {
		this.id = id ? id : null;
		(this.firstName = firstName),
			(this.lastName = lastName),
			(this.birthDate = birthDate),
			(this.cpf = cpf),
			(this.email = email),
			(this.password = password),
			(this.phoneNumber = phoneNumber),
			(this.genre = genre),
			(this.fileName = fileName ? fileName : null),
			(this.filePath = filePath ? filePath : null),
			(this.status = status),
			(this.createdAt = new Date(createdAt));
		this.updatedAt = new Date(updatedAt);
	}
}
