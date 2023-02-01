import { Router } from 'express';

import foodRouter from './food.routes.js'

import authRouter from './auth.routes.js'

const api = Router();

api.use('/foods' ,foodRouter)

api.use('/auth', authRouter)

export default api