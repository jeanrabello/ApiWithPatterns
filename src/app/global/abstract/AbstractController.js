export default class AbstractController {
	handleError(res, error) {
		const { status, message, stack } = error;
		res.status(status ? status : 500).json(message);
		// console.log(stack);
	}
}
