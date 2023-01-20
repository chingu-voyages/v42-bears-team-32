import { Router } from 'express'
import { getAllFoods } from '../controllers/food.controller.js'
const router = Router()

router.get('/', getAllFoods)

router.post('/', (req, res) => {})

export default router
