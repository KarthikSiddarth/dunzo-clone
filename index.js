const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const orderRoute = require('./api/routes/orders')

app.listen(8000, () => console.log('listening on port 8000'))

app.use(bodyParser.json())
app.use('/orders', orderRoute)
