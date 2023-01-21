import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import api from './routes/api.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'

const app = express()

app.use(
  cors({
    origin: '*'
  })
)

app.use(morgan('tiny'))

app.use('/v1', api)
app.use(notFound)
app.use(errorHandler)

export default app
