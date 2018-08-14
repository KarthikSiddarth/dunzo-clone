const { Schema, model } = require('mongoose')

const runnerSchema = Schema({
  name: { type: String, required: true },
  currentOrder: { type: Schema.Types.ObjectId, ref: 'Order' },
  pastOrders: [{ type: Schema.Types.ObjectId, ref: 'Order' }]
})

module.exports = model('Runner', runnerSchema)
