const { Schema, model } = require('mongoose')

const runnerSchema = Schema({
  name: { type: String, required: true },
  currentTasks: {}, // get it from orders collection
  pastTasks: {} // get it from orders collection
})

module.exports = mongoose.model('Runner', runnerSchema)
