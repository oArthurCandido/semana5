import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import authMiddleware from './app/middlewares/auth';
import CollaboratorController from './app/controllers/CollaboratorController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleCOntroller from './app/controllers/ScheduleCOntroller';
import Notifications from './app/schema/Notifications';
import NotificationsController from './app/controllers/NotificationsController';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

// Rotas autenticadas
routes.use(authMiddleware);

routes.put('/users', UserController.update);

// Rota de agendamento
routes.post('/appointments', AppointmentController.store);

//Listagem de agendamento
routes.get('/appointments', AppointmentController.index);

//Lista colaboradores

routes.get('/collaborator', CollaboratorController.index);

//Listagem de agendamento colaborador

routes.get('/schedule', ScheduleCOntroller.index);

//Listagem de notificações

routes.get('/notifications', NotificationsController.index);

//Marcar como lida

routes.put('/notifications/:id', NotificationsController.update);

// upload de arquivos
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
