const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const orderRoute = require('./api/routes/orders')

app.listen(8000, () => console.log('listening on port 8000'))

app.use(bodyParser.json())
app.use('/orders', orderRoute)

mongoose.connect('mongodb://localhost:27017/dunzoClone', { useNewUrlParser: true })

let db = mongoose.connection

db.on('open', () => { console.log('connected to dunzo clone db') })
