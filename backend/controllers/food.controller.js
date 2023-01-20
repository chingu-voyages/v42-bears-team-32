import asyncHandler from '../services/async-handler.js'
import Food from '../models/food.model.js'
export const getAllFoods = asyncHandler(async (req, res) => {
  const foods = await Food.find({})
  if (foods) return res.json(foods)

  res.json({ message: 'Product not found' })
})
