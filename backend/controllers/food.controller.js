import asyncHandler from '../services/async-handler.js'
import Food from '../models/food.model.js'
export const getAllFoods = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page)
  const limit = parseInt(req.query.limit)
 
  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  const results = {}

  if (endIndex < (await Food.countDocuments().exec())) {
    results.next = {
      page: page + 1,
      limit: limit
    }
  }

  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit
    }
  }
  results.results = await Food.find().limit(limit).skip(startIndex).exec()
  return res.json(results)
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

  const food = await Food.create({
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
  })

  return res.status(201).json(food)
})
