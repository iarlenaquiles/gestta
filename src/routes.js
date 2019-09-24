import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import TaskController from './app/controllers/TaskController';
import FileController from './app/controllers/FileController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/tasks', TaskController.store);

routes.post('/files/:taskId', upload.single('file'), FileController.store);

export default routes;
