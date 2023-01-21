import { Router } from 'express';

import foodRouter from './food.routes.js'

const api = Router();

api.use('/foods' ,foodRouter)

export default api