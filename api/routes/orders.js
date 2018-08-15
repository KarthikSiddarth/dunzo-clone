const router = require('express').Router()

router.get('/', (req, res) => {
  console.log(req.url)
  res.status(200).json({message: 'Welcome, User'})
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.status(200).json({message: 'your order has been placed'})
})

module.exports = router
