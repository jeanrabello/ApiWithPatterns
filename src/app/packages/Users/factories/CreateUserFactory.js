import AbstractFactory from '../../../global/abstract/AbstractFactory';
import ValidateAgeStrategy from '../strategies/ValidateAgeStrategy';
import VerifyCpfExistenceStrategy from '../strategies/VerifyCpfExistenceStrategy';
import VerifyEmailExistenceStrategy from '../strategies/VerifyEmailExistenceStrategy';
import VerifyPasswordStrategy from '../strategies/VerifyPasswordStrategy';

class CreateUserFactory extends AbstractFactory {
	constructor(data) {
		super(
			[
				new VerifyEmailExistenceStrategy(),
				new VerifyCpfExistenceStrategy(),
				new ValidateAgeStrategy(),
				new VerifyPasswordStrategy(),
			],
			data
		);
	}
}

export default CreateUserFactory;
