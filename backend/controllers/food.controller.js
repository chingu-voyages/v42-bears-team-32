import asyncHandler from '../services/async-handler.js'
import Food from '../models/food.model.js'
export const getAllFoods = asyncHandler(async (req, res) => {
  const foods = await Food.find({})
  if (foods) return res.json(foods)

  res.json({ message: 'Product not found' })
})

export const createFood = asyncHandler(async (req, res) => {
  const {
    name,
    imageUrl,
    ingredients,
    price,
    calories,
    restaurantName,
    rating,
    category,
    tags,
    deliveryTime,
    avaliablity
  } = req.body

  const food = await Food.create({name,
    imageUrl,
    ingredients,
    price,
    calories,
    restaurantName,
    rating,
    category,
    tags,
    deliveryTime,
    avaliablity})

    if (food) return res.status(201).json(food)
    throw new Error('Error Creating Food')
})
