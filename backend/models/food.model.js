import mongoose from 'mongoose'


/**
 * @openapi
 * 
 * components:
 *   schemas:
 *     Food:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the food
 *         imageUrl:
 *           type: string
 *           description: URL of the food image
 *         ingredients:
 *           type: array
 *           items:
 *             type: string
 *             description: List of ingredients
 *         price:
 *           type: number
 *           format: decimal
 *           description: Price of the food
 *         carbs:
 *           type: number
 *           description: Carbohydrates in the food
 *         fat:
 *           type: number
 *           description: Fat content in the food
 *         protein:
 *           type: number
 *           description: Protein content in the food
 *         restaurantName:
 *           type: string
 *           description: Name of the restaurant
 *         rating:
 *           type: number
 *           description: Rating of the food
 *         deliveryTime:
 *           type: number
 *           description: Delivery time in minutes
 *         category:
 *           type: array
 *           items:
 *             type: string
 *           description: Categories the food belongs to
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *           description: Tags for the food
 *         countInStock:
 *           type: number
 *           description: Number of items available for delivery
 *     FoodCreate:
 *       type: object
 *       required:
 *         - name
 *         - price
 *         - carbs
 *         - fat
 *         - protein
 *         - restaurantName
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the food
 *         imageUrl:
 *           type: string
 *           description: URL of the food image
 *         ingredients:
 *           type: array
 *           items:
 *             type: string
 *             description: List of ingredients
 *         price:
 *           type: number
 *           format: decimal
 *           description: Price of the food
 *         carbs:
 *           type: number
 *           description: Carbohydrates in the food
 *         fat:
 *           type: number
 *           description: Fat content in the food
 *         protein:
 *           type: number
 *           description: Protein content in the food
 *         restaurantName:
 *           type: string
 *           description: Name of the restaurant
 *         rating:
 *           type: number
 *           description: Rating of the food
 *         deliveryTime:
 *           type: number
 *           description: Delivery time in minutes
 *         category:
 *           type: array
 *           items:
 *             type: string
 *           description: Categories the food belongs to
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *           description: Tags for the food
 *         countInStock:
 *           type: number
 *           description: Number of items available for delivery
 */




const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    requried: true
  },
  imageUrl: {
    type: String
  }, 
  ingredients: [
    {
      type: String
    }
  ],
  price: {
    type: mongoose.Types.Decimal128,
    required: true
  },
  carbs: {
    type: Number,
    required: true
  },
  fat: {
    type: Number,
    required: true
  },
  calorie: {
    type: Number,
    required: true
  },
  protein: {
    type: Number,
    required: true
  },
  restaurantName: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    max: 5,
    min: 0,
    default: 0
  },
  deliveryTime: {
    type: Number
  },
  category: {
    type: [{ type: String }]
  },
  tags: {
    type: [{ type: String }]
  },
  countInStock: {
    type: Number
  }
})

const Food = mongoose.model('Food', foodSchema)
export default Food
