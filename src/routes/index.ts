import { Router } from 'express';
import monumentsRouter from './monuments.routes';

const routes = Router();

routes.use('/monuments', monumentsRouter);

export default routes;
