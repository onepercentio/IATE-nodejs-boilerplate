const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const bearerToken = require('express-bearer-token')
const healthCheck = require('express-healthcheck')

const authHandler = require('./src/middleware/auth')
const errorHandler = require('./src/middleware/error')

const app = express()

// routes
const assetsRoutes = require('./src/assets/routes')
const customersRoutes = require('./src/customers/routes')

// middlewares setup
app.use(helmet())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(bearerToken())
app.use(authHandler)
app.use('/healthcheck', healthCheck())

// routes setup
app.use([ walletRoutes, accessListRoutes, transactionsRoutes, tokensRoutes, configsRoutes, customersRoutes ])
app.use(errorHandler)

module.exports = app