import { Router } from 'express';
import upload from '../../../config/multer';
import authMiddleware from '../../global/middlewares/auth';
import controller from '../../global/controllers/UserController';
const userRoutes = Router();

userRoutes.post('/', upload.single('avatar'), controller.create);
userRoutes.get('/:cpf', controller.getByCpf);
userRoutes.get('/id/:id', controller.getById);

userRoutes.use(authMiddleware);
userRoutes.put('/', upload.single('avatar'), controller.update);
userRoutes.put('/password', controller.updatePassword);
userRoutes.delete('/', controller.deleteLogically);

export default userRoutes;
