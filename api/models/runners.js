const mongoose = require('mongoose')

const runnerSchema = mongoose.Schema({
  name: { type: String, required: true },
  currentOrder: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
  pastOrders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]
})

module.exports = mongoose.model('Runner', runnerSchema)
