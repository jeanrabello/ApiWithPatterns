import { Router } from 'express';
import Facade from '../../global/controllers/Facade';
const facade = new Facade();
const sessionRoutes = Router();

sessionRoutes.post('/login', facade.create);
sessionRoutes.post('/logout', facade.delete);

export default sessionRoutes;
