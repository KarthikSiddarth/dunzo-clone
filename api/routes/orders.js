const router = require('express').Router()
const Order = require('../models/orders')
const User = require('../models/users')

/*  router.get('/', async (req, res) => {
  console.log(req.url)
  let orders = await Order.find().exec()
  res.status(200).json(orders)
}) */

router.get('/placed', async (req, res) => {
  console.log(req.url)
  let orders = await Order.find({status: 'placed'}).exec()
  res.status(200).json(orders)
})

router.get('/:id', async (req, res) => {
  console.log(req.url)
  let order = await Order.findOne({_id: req.params.id}).exec()
  res.status(200).json(order)
})

router.post('/', async (req, res) => {
  console.log(req.body)
  try {
    if (!req.body.description) { throw Error('no description provided') }
    const userId = (await User.findOne({ name: 'amogh' }).exec())._id
    if (!userId) { throw Error('no such user') }
    const order = new Order({
      ...req.body,
      user: userId
    })
    let result = await order.save()
    res.status(200).json({message: 'order placed', result: result})
    await User.update({name: 'amogh'}, {$set: {currentOrder: result._id}})
  } catch (error) {
    res.status(500).json({message: 'order not placed', error})
  }
})

router.put('/:id', async (req, res) => {
  try {
    const orderId = req.params.id
    if (!orderId) { throw Error('no order id provided') }
    let result = await Order.update({_id: orderId}, {$set: req.body})
    res.status(200).json({message: 'order updated', result})
  } catch (error) {
    res.status(500).json({message: 'order not updated', error})
  }
})

module.exports = router
