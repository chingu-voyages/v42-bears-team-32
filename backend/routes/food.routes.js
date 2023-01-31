import { Router } from 'express'
import { getAllFoods, createFood, getFoodById } from '../controllers/food.controller.js';

const router = Router()

router.route('/')
  .get(getAllFoods)
  .post(createFood);
router.post("/:id", getFoodById)

export default router
