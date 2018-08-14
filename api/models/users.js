const { Schema, model } = require('mongoose')

const userSchema = Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  pastOrders: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
  currentOrder: { type: Schema.Types.ObjectId, ref: 'Order' }
})

module.exports = model('User', userSchema)
