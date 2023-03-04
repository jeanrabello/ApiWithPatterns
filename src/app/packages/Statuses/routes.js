import { Router } from 'express';
import Facade from '../../global/controllers/Facade';

const facade = new Facade();
const statusRoutes = Router();

statusRoutes.get('/:code', facade.getByCode);

export default statusRoutes;
