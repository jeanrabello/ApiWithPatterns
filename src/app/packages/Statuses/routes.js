import { Router } from 'express';
import controller from '../../global/controllers/StatusesController';

const statusRoutes = Router();

statusRoutes.get('/:code', controller.getByCode);

export default statusRoutes;
