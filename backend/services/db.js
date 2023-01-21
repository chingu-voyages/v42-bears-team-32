import { set, connect } from 'mongoose'
import { config } from 'dotenv'
config()
import mongo from '../config/keys.js'
set('strictQuery', true)
export const connectDB = async () => {
  try {
    const conn = await connect(mongo.MONGO_URI)
    console.log(`MongoDB Connected : ${conn.connection.host}`)
  } catch (err) {
    console.log(`Error: ${err.message}`)
    process.exit(1)
  }
}


