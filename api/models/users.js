const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  pastOrders: [],
  currentOrder: { item: String, quantity: Number, required: true }
})
