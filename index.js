const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const orderRoute = require('./api/routes/orders')
const path = require('path')

app.use('/', express.static(path.join(__dirname, 'view', 'public')))
app.use(bodyParser.json())
app.use('/api/orders', orderRoute)

app.listen(8000, () => console.log('listening on port 8000'))
