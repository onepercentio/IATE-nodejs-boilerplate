const express = require('express')
const translator = require('./translator')

const routes = express.Router()

routes.post('/customers', translator.create)
routes.get('/customers', translator.find)
routes.get('/customers/:list', translator.find)
routes.patch('/customers/:list', translator.find)

module.exports = routes
