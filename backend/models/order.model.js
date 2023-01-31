import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
  food: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Food',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: mongoose.Types.Decimal128,
    required: true,
    ref: 'User'
  },
  customerName: {
    type: String,
    required: true
  },
  customerAddress: {
    type: String,
    required: true
  },
  customerPhone: {
    type: String,
    required: true
  },
  deliveryDate: {
    type: Date,
    required: true
  },
  paymentMethod: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  status: {
    type: String,
    enum: ['processing', 'delivered', 'cancelled'],
    default: 'processing'
  }
})

const Order = mongoose.model('Order', orderSchema)
export default Order
