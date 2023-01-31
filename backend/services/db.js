import { set, connect } from 'mongoose'
import { config } from 'dotenv'
import colors from 'colors'
config()
import keys from '../config/keys.js'
set('strictQuery', true)

export const connectDB = async () => {
  try {
    const conn = await connect(keys.MONGO_URI)
    console.log(`MongoDB Connected : ${conn.connection.host}`.grey)
  } catch (err) {
    console.log(`Error: ${err.message}`)
    process.exit(1)
  }
}


