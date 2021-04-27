const interactor = require('../useCases/interactor')

const translator = {

  create: async (req, res, next) => {
    // #swagger.tags = ['Customer']
    // #swagger.description = 'Create a custumer'
    try {
      const customer = {
        ...req.body,
        adminToken: req.token
      }
      const id = await interactor.create(customer)
      res.status(200).json({ id })
    } catch (error) {
      next(error)
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
