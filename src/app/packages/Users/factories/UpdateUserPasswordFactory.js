import AbstractFactory from '../../../global/abstract/AbstractFactory';
import PasswordConfirmationStrategy from '../strategies/PasswordConfirmationStrategy';
import VerifyPasswordStrategy from '../strategies/VerifyPasswordStrategy';
import VerifyUserPasswordStrategy from '../strategies/VerifyUserPasswordStrategy';

class UpdateUserPasswordFactory extends AbstractFactory {
	constructor(data) {
		super(
			[
				new VerifyUserPasswordStrategy(),
				new VerifyPasswordStrategy(),
				new PasswordConfirmationStrategy(),
			],
			data
		);
	}
}

export default UpdateUserPasswordFactory;
