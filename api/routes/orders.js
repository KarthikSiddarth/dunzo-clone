const router = require('express').Router()
const Order = require('../models/orders')
const User = require('../models/users')

router.get('/', async (req, res) => {
  console.log(req.url)
  let orders = await Order.find({}).exec()
  res.status(200).json({message: 'all the orders', orders})
})

router.post('/', async (req, res) => {
  console.log(req.body)
  const order = new Order({
    ...req.body,
    user: (await User.findOne({ name: 'amogh' }).exec())._id
  })
  order.save()
    .then((result) => { res.status(200).json({message: 'order placed', result: result}) })
    .catch((err) => { res.status(500).json({message: 'order not placed', err: err}) })
})

module.exports = router
