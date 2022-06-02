import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import authMiddleware from './app/middlewares/auth';
import CollaboratorController from './app/controllers/CollaboratorController';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

// Rotas autenticadas
routes.use(authMiddleware);

routes.put('/users', UserController.update);

//Lista colaboradores

routes.get('/collaborator', CollaboratorController.index);

// upload de arquivos
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
