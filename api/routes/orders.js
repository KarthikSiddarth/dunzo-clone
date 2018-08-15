const router = require('express').Router()
const Order = require('../models/orders')

router.get('/', (req, res) => {
  console.log(req.url)
  res.status(200).json({message: 'Welcome, User'})
})

router.post('/', (req, res) => {
  console.log(req.body)
  const order = new Order(req.body)
  order.save()
    .then((result) => { res.status(200).json({message: 'order placed', result: result}) })
    .catch((err) => { res.status(500).json({message: 'order not placed', err: err}) })
})

module.exports = router
