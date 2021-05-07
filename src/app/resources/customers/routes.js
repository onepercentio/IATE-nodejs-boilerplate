const express = require('express')
const { translator } = require('./translator-v1')

const routes = express.Router()

routes.post('/customers', translator.create)
routes.get('/customers', translator.findAll)
routes.get('/customers/:id', translator.findById)
routes.put('/customers/:id', translator.updateById)
routes.patch('/customers/:id', translator.findById)

module.exports = routes
