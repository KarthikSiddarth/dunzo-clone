const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
  description: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  runner: { type: mongoose.Schema.Types.ObjectId, ref: 'Runner' }
})

module.exports = mongoose.model('Task', taskSchema)
