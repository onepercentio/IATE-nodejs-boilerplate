/* eslint-disable prefer-destructuring */
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
      } else {
        next(error)
      }
    }
  },

  findById: async (req, res, next) => {
    // #swagger.tags = ['Customer']
    // #swagger.description = 'Create a custumer'
    /* #swagger.parameters['id'] = {
               description: 'Customer id',
               type: 'string',
               required: true
        }
      */
    try {
      /* #swagger.responses[200] = {
               schema: { $ref: "#/definitions/Customer" },
               description: 'Customer finding'
        }
      */
      const customers = await interactor.findById(req.params.id)
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
      /* #swagger.responses[200] = {
              schema: {$ref:"#/definitions/CustomerList"},
               description: 'Return a Customer list'
        }
      */
      const customers = await interactor.findAll()
      res.status(200).json(customers)
    } catch (error) {
      // #swagger.responses[500]
      next(error)
    }
  },

  updateById: async (req, res, next) => {
    /*
    #swagger.tags = ['Customer']
    #swagger.description = 'Update Customer by id'
    #swagger.parameters['id'] = {
               description: 'Customer id',
               type: 'string',
               required: true
        }
    #swagger.parameters['Customer'] = {
                in: 'body',
                type: 'object',
                schema: {$ref: "#/definitions/UpdateCustomer"}
    }
    #swagger.response[200] = {
      schema: {$ref: "#definitions/UpdateCustomer"},
      description: 'Return customer edited'
    }
    #swagger.responses[500]
    */
    try {
      const id = req.params.id
      const customer = req.body
      const result = await interactor.updateById(id, customer)
      res.status(200).json(result)
    } catch (error) {
      next(error)
    }
  }

}

module.exports = { translator }
