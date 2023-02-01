import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from '../data/user.data.js'
import foods from '../data/food.data.js'
import User from '../models/user.model.js'
import Food from '../models/food.model.js'
import Order from '../models/order.model.js'
import {connectDB} from '../services/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Food.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)

    await Food.insertMany(foods)

    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Food.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}