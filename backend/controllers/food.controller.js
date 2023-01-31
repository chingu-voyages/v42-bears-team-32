import asyncHandler from '../services/async-handler.js'
import Food from '../models/food.model.js'
export const getAllFoods = asyncHandler(async (req, res) => {
  const count = await Food.countDocuments().exec();
  let results = pagination(req.query, )
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

export const getFoodById= asyncHandler(async (req,res) => {
    const food = await Food.findById(req.params.id)
    return res.status(201).json(food)
})
