const router = require('express').Router()
const Order = require('../models/orders')
const Runner = require('../models/runners')

router.post('/:id', async (req, res) => {
  console.log(req.body)
  try {
    const orderId = req.body._id
    if (!orderId) { throw Error('no order id provided') }
    const runnerId = (await Runner.findOne({_id: req.params.id}))._id
    if (!runnerId) { throw Error('no such runner') }
    await Promise.all([
      Order.update({_id: orderId}, {$set: {status: 'assigned', runner: runnerId}}),
      Runner.update({_id: runnerId}, {$set: {currentOrder: orderId}})
    ])
    res.status(200).json({message: 'order assigned'})
  } catch (error) {
    console.log(error)
    res.status(500).json({message: 'order not assigned', error})
  }
})

router.get('/:id', async (req, res) => {
  const runner = await Runner.findOne({_id: req.params.id})
  res.status(200).json(runner)
})

module.exports = router
