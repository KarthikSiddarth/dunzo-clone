const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
  description: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  runner: { type: mongoose.Schema.Types.ObjectId, ref: 'Runner' },
  status: { type: String, required: true }
})

module.exports = mongoose.model('Order', orderSchema)
