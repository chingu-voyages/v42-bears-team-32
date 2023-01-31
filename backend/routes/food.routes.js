import { Router } from 'express'
import {authUser, getUserProfile, getUsers, registerUser, updateUserProfile } from '../controllers/user.controller.js'
const router = Router()

router.route('/')
  .get(getAllFoods)
  .post(createFood);

export default router
