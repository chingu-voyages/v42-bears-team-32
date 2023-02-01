import { config } from "dotenv"
config()
export default {
  MONGO_URI: process.env.DEV_MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET
}
