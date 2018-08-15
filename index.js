const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const orderRoute = require('./api/routes/orders')

app.use(bodyParser.json())
app.use('/orders', orderRoute)

app.listen(8000, () => console.log('listening on port 8000'))
