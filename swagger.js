const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = [
  'src/app/resources/customers/routes.js',
  'src/app/resources/person/routes.js'
]

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
    }
  },
  tags: [
    {
      name: 'Customer',
      description: 'Customers Endpoints'
    },
    {
      name: 'Product',
      description: 'Product Endpoints'
    },
    {
      name: 'Person'
    }

  ],
  definitions: {
    Customer: {
      name: 'Christian Burgard',
      document: 0,
      customer: 'admintoken',
      email: 'example@example.com',
      id: '6e005fa4-c996-4d40-996c-a082c2151b5e'
    },
    CustomerList: [
      {
        name: 'Christian Burgard',
        document: 0,
        customer: 'admintoken',
        id: '6e005fa4-c996-4d40-996c-a082c2151b5e'
      }
    ],
    AddCustomer: {
      name: 'Christian Burgard',
      document: 0,
      email: 'example@example.com'

    },
    PutCustomer: {
      $name: 'Christian Burgard',
      $document: 0,
      $customer: 'admintoken'
    },
    CreateProduct: {
      $name: 'Pao',
      qtd: 1
    },
    Person: {
      $name: 'Jao'
    }

  }
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('./index.js')
})