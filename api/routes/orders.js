const router = require('express').Router()
const Order = require('../models/orders')
const User = require('../models/users')

router.get('/', async (req, res) => {
  console.log(req.url)
  let orders = await Order.find({}).exec()
  res.status(200).json({message: 'all the orders', orders})
})

router.get('/placed', async (req, res) => {
  console.log(req.url)
  let orders = await Order.find({status: 'placed'}).exec()
  res.status(200).json(orders)
})

router.post('/', async (req, res) => {
  console.log(req.body)
  const order = new Order({
    ...req.body,
    user: (await User.findOne({ name: 'amogh' }).exec())._id
  })
  try {
    let result = await order.save()
    res.status(200).json({message: 'order placed', result: result})
    await User.update({name: 'amogh'}, {$set: {currentOrder: result._id}})
  } catch (error) {
    res.status(500).json({message: 'order not placed', error})
  }
})

router.put('/:id', async (req, res) => {
  const orderId = req.params.id
  try {
    let result = await Order.update({_id: orderId}, {$set: req.body})
    res.status(200).json({message: 'order updated', result})
  } catch (error) {
    res.status(500).json({message: 'order not updated', error})
  }
})

module.exports = router
