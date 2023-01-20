import { Schema, model } from 'mongoose'
const foodSchema = new Schema({
  name: {
    type: String,
    requried: true
  },
  imageUrl: {
    type: {
      type: String
    }
  },
  ingredients: {
    type: {
      type: String
    }
  },
  price: {
    type: Number,
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
  tag: {
    type: [{ type: String }]
  },
  avaliablity: {
    type: Number
  }
})

const Food = model('Food', foodSchema)
export default Food
