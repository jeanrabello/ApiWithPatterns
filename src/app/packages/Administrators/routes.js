import { Router } from 'express';
import controller from '../../global/controllers/AdministratorController';

const adminRoutes = Router();

adminRoutes.post('/', controller.create);
adminRoutes.get('/:userId', controller.getByUserId);
adminRoutes.delete('/:userId', controller.deleteLogically);

export default adminRoutes;
