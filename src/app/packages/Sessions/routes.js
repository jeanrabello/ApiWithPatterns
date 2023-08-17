import { Router } from 'express';
import controller from '../../global/controllers/SessionController';

const sessionRoutes = Router();

sessionRoutes.post('/', controller.login);
sessionRoutes.post('/token', controller.loginWithtoken);

export default sessionRoutes;
