const { Schema, model } = require('mongoose')

const orderSchema = Schema({
  description: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  runner: { type: Schema.Types.ObjectId, ref: 'Runner' },
  status: { type: String, required: true }
})

module.exports = model('Order', orderSchema)
