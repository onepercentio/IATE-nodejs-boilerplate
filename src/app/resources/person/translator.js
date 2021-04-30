const { schema } = require('./schema')

const translator = {

  create: async (req, res, next) => {
    // #swagger.tags = ['Person']
    /* #swagger.parameters['person'] = {
                in: 'body',
                required: true,
                type: 'object',
                schema: {$ref: "#/definitions/Person"}
    } */
    try {
      const obj = await schema.validateAsync(req.body)
      res.status(200).json(obj)
    } catch (error) {
      if (error.isJoi) error.status = 422
      res.status(error.status).json({ message: error.details[0].message })
    }
  }

}

module.exports = { translator }
