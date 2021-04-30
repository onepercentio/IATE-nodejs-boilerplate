const interactor = require('./interactor')
const { customerSchema } = require('./customerSchema')

const translator = {

  create: async (req, res, next) => {
    // #swagger.tags = ['Customer']
    /* #swagger.parameters['newCustomer'] = {
                in: 'body',
                required: true,
                type: 'object',
                schema: {$ref: "#/definitions/AddCustomer"}
    } */
    try {
      const customer = await customerSchema.validateAsync(req.body)
      const id = await interactor.create(customer)
      res.status(200).json({ id })
    } catch (error) {
      if (error.isJoi === true) {
        error.status = 422
        res.status(error.status).json({ message: error.details[0].message })
      }
      if (error.status >= 500) {
        res.status(error.status).json({ message: 'internal server error' })
      }
    }
  },

  findById: async (req, res, next) => {
    // #swagger.tags = ['Customer']
    // #swagger.description = 'Create a custumer'
    /* #swagger.parameters['id'] = {
               description: 'Customer id',
               type: 'number',
               required: true,
               in: 'patch'
        }
      */
    try {
      const [, , ids] = req.path.split('/')
      const list = ids?.split(',') ?? []
      const customers = await interactor.find(list)

      /* #swagger.responses[200] = {
               schema: { $ref: "#/definitions/Customer" },
               description: 'Customer finding'
        }
      */
      res.status(200).json(customers)
    } catch (error) {
      // #swagger.responses[500]
      next(error)
    }
  },

  findAll: async (req, res, next) => {
    // #swagger.tags = ['Customer']
    // #swagger.description = 'Create a custumer'
    try {
      const [, , ids] = req.path.split('/')
      const list = ids?.split(',') ?? []
      const customers = await interactor.find(list)
      /* #swagger.responses[200] = {
              schema: {$ref:"#/definitions/CustomerList"},
               description: 'Return a Customer list'
        }
      */
      res.status(200).json(customers)
    } catch (error) {
      // #swagger.responses[500]
      next(error)
    }
  }
}

module.exports = { translator }
