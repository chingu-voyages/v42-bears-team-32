import { createServer } from 'http'

import app from './app.js'

import { connectDB } from './services/db.js'

const PORT = process.env.PORT || 8000

const server = createServer(app)

async function startServer () {
  await connectDB()

  server.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
  })
}

startServer()
