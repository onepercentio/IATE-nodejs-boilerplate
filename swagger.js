const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['src/customers/routes.js']

swaggerAutogen(outputFile, endpointsFiles).then(()=>{
  require('./index.js')
})