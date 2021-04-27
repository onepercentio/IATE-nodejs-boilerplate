const express = require('express')
const { translator } = require('../controllers/controller')

const routes = express.Router()

routes.post('/customers', translator.create)
routes.get('/customers', translator.findAll)
routes.get('/customers/:id', translator.findById)
routes.patch('/customers/:id', translator.findById)

module.exports = routes
