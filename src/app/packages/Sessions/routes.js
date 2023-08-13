import { Router } from 'express';
import controller from '../../global/controllers/SessionController';

const sessionRoutes = Router();

sessionRoutes.post('/', controller.login);

export default sessionRoutes;
