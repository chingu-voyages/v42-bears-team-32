import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import AdminJSMongoose from '@adminjs/mongoose'
import Food from '../models/food.model.js'
import User from '../models/user.model.js'
import Order from '../models/order.model.js'
AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database
})

const adminOptions = {
  resources: [Food, User, Order]
}
const admin = new AdminJS(adminOptions)

const adminRouter = AdminJSExpress.buildRouter(admin)

export const connectAdmin = app => {
  app.use(admin.options.rootPath, adminRouter)
}
