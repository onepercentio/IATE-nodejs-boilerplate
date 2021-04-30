const express = require('express')
const { translator } = require('./translator')

const routes = express.Router()

routes.post('/sample', translator.create)


module.exports = routes