const router = require('express').Router()
const User = require('../models/users')

router.get('/:id', async (req, res) => {
  console.log(req.url)
  let profile = await User.findOne({_id: req.params.id}).populate('currentOrder')
  res.status(200).json(profile)
})

module.exports = router
