import mongoose from 'mongoose'
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
  calories: {
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
  avaliablity: {
    type: Number
  }
})

const Food = mongoose.model('Food', foodSchema)
export default Food
