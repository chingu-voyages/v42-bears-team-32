import Order from '../models/order'

// Create a new order
export const createOrder = async (req, res) => {
  const order = new Order({
    food: req.body.food,
    quantity: req.body.quantity,
    totalPrice: req.body.totalPrice,
    customerName: req.body.customerName,
    customerAddress: req.body.customerAddress,
    customerPhone: req.body.customerPhone,
    deliveryDate: req.body.deliveryDate,
    paymentMethod: req.body.paymentMethod,
    userId: req.user._id,
    status: req.body.status
  })

  try {
    const newOrder = await order.save()
    res.status(201).json(newOrder)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Get all orders
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
    res.json(orders)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get a specific order by ID
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
    if (!order) {
      return res.status(404).json({ message: 'Order not found' })
    }
    res.json(order)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Update an order by ID
export const updateOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
    if (!order) {
      return res.status(404).json({ message: 'Order not found' })
    }

    order.food = req.body.food
    order.quantity = req.body.quantity
    order.totalPrice = req.body.totalPrice
    order.customerName = req.body.customerName
    order.customerAddress = req.body.customerAddress
    order.customerPhone = req.body.customerPhone
    order.deliveryDate = req.body.deliveryDate
    order.paymentMethod = req.body.paymentMethod
    order.userId = req.user._id
    order.status = req.body.status

    const updatedOrder = await order.save()
    res.json(updatedOrder)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}


