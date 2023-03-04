import { Router } from 'express';
import upload from '../../../config/multer';
import Facade from '../../global/controllers/Facade';
import authMiddleware from '../../global/middlewares/auth';

const facade = new Facade();
const userRoutes = Router();

userRoutes.post('/', upload.single('avatar'), facade.create);
userRoutes.get('/:cpf', facade.getByCpf);
userRoutes.get('/id/:id', facade.getById);

userRoutes.use(authMiddleware);
userRoutes.put('/', facade.update);
userRoutes.put('/password', facade.updatePassword);
userRoutes.delete('/', facade.deleteLogically);

export default userRoutes;
