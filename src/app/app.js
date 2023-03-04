import express from 'express';
import cors from 'cors';
import '../database';

//Middlewares
import authMiddleware from './global/middlewares/auth';
import transactionMiddleware from './global/middlewares/transactions';
import errorTreatmentMiddleware from './global/middlewares/errorTreatment';

//Routes
import statusRoutes from './packages/Statuses/routes.js';
import userRoutes from './packages/Users/routes.js';
import adminRoutes from './packages/Administrators/routes';
import sessionRoutes from './packages/Sessions/routes';

class App {
	constructor() {
		this.server = express();
		this.middlewares();
		this.routes();
	}

	middlewares() {
		this.server.use(cors());
		this.server.use(express.json());
		this.server.use(transactionMiddleware);
		this.server.use(errorTreatmentMiddleware);
	}

	routes() {
		this.server.use('/app/status', statusRoutes);
		this.server.use('/app/user', userRoutes);
		this.server.use('/app/admin', adminRoutes);
		this.server.use('/app/session', sessionRoutes);
	}
}

export default new App().server;
