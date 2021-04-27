const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['src/app/resources/customers/routes/routes.js']

const doc = {
  info: {
    version: '1.0.0',
    title: 'MOSS BoilerPlate',
    description: 'Esta é uma documentação do serviço de boilerplate da MOSS'
  },
  host: 'localhost:3000',
  basePath: '/',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  securityDefinitions: {
    api_key: {
      type: 'apiKey',
      name: 'api_key',
      in: 'header'
    },
    petstore_auth: {
      type: 'oauth2',
      authorizationUrl: 'https://petstore.swagger.io/oauth/authorize',
      flow: 'implicit',
      scopes: {
        read_pets: 'read your pets',
        write_pets: 'modify pets in your account'
      }
    }
  },
  tags: [
    {
      name: 'Customer',
      description: 'Customers Endpoints'
    }

  ],
  definitions: {
    Customer: {
      name: 'Christian Burgard',
      document: '00000000000',
      customer: 'admintoken',
      id: '6e005fa4-c996-4d40-996c-a082c2151b5e'
    },
    CustomerList: [
      {
        name: 'Christian Burgard',
        document: '00000000000',
        customer: 'admintoken',
        id: '6e005fa4-c996-4d40-996c-a082c2151b5e'
      }
    ],
    AddCustomer: {
      $name: 'Christian Burgard',
      $document: '00000000000',
      $customer: 'admintoken'
    },
    PutCustomer: {
      $name: 'Christian Burgard',
      $document: '00000000000',
      $customer: 'admintoken'
    }

  }
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('./index.js')
})
