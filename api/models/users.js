const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  pastOrders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
  currentOrder: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' }
})

module.exports = mongoose.model('User', userSchema)
