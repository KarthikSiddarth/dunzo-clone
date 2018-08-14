const { Schema, model } = require('mongoose')

const userSchema = Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  pastOrders: [/*get from orders collection*/],
  currentOrder: {}// get it from orders collection
})
