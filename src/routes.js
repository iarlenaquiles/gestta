import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import TaskController from './app/controllers/TaskController';
import FileController from './app/controllers/FileController';
import GetOneTaskController from './app/controllers/GetOneTaskController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/tasks', TaskController.store);
routes.get('/tasks', TaskController.index);
routes.get('/tasks/:taskId', GetOneTaskController.index);
routes.delete('/tasks/:taskId', TaskController.delete);
routes.post('/files/:taskId', upload.single('file'), FileController.store);
routes.delete('/files/:docId/task/:taskId', FileController.delete);

export default routes;
