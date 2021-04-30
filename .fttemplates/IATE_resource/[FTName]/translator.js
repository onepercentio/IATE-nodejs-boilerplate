const interactor = require('./interactor')
const { schema } = require('./schema')

const translator = {

  create: async (req, res, next) =>{
    // #swagger.tags = ['Sample']
    /* #swagger.parameters['sample'] = {
                in: 'body',
                required: true,
                type: 'object',
                schema: {$ref: "#/definitions/Sample"}
    }*/
    try {
      const obj = await schema.validateAsync(req.body)

    } catch (error) {
      if(error.isJoi === true) error.status = 422;
      res.status(error.status).json({message: error.details[0].message})
    }
  },

}

module.exports = { translator }