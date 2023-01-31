import jwt from 'jsonwebtoken'
import asyncHandler from '../services/async-handler.js'
import User from '../models/user.model.js'
import { config } from 'dotenv'
config()

const protect = asyncHandler(async (req, res, next) => {
  let token
  console.log(req.headers.Authorization)
  if (
    req.headers.Authorization &&
    req.headers.Authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.Authorization.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      //console.log(decoded)
      req.user = await User.findById(decoded.id).select('-password')
      //console.log(req.user)
      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error('Not authorized, token failed')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
});



export { protect }
