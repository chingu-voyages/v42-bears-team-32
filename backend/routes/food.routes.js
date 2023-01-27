import { Router } from 'express'
import { createFood, getAllFoods } from '../controllers/food.controller.js'
const router = Router()

router.route('/')
  .get(getAllFoods)
  .post(createFood);

export default router
