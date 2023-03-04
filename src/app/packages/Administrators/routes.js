import { Router } from 'express';
import Facade from '../../global/controllers/Facade';

const facade = new Facade();
const adminRoutes = Router();

adminRoutes.post('/', facade.create);
adminRoutes.get('/:userId', facade.getByUserId);
adminRoutes.delete('/:userId', facade.deleteLogically);

export default adminRoutes;
