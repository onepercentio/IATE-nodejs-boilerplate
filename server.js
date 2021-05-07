const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const healthCheck = require('express-healthcheck')

const swaggerUi = require('swagger-ui-express')

const errorHandler = require('./src/app/shared/middleware/error')
const swaggerFile = require('./swagger_output.json')

const app = express()

// routes
// const assetsRoutes = require('./src/assets/routes')
const customersRoutes = require('./src/app/resources/customers/routes')

// middlewares setup
app.use(helmet())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
// app.use(bearerToken())
// app.use(authHandler)
app.use('/healthcheck', healthCheck())

// swagger config
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

// routes setup
app.use(customersRoutes)

// error handler middleware
app.use(errorHandler)

module.exports = app
