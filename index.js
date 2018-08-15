const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const orderRoute = require('./api/routes/orders')
const runnerRoute = require('./api/routes/runners')
const path = require('path')

app.use('/', express.static(path.join(__dirname, 'view', 'public')))
app.use(bodyParser.json())
app.use('/api/orders', orderRoute)
app.use('/api/runners', runnerRoute)

mongoose.connect('mongodb://localhost:27017/dunzoClone', { useNewUrlParser: true })

let db = mongoose.connection

db.on('open', () => { console.log('connected to dunzo clone db') })

app.listen(8000, () => console.log('listening on port 8000'))
