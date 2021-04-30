const Joi = require('@hapi/joi')

const schema = Joi.object({

  name: Joi.string().min(2).required()

})

module.exports = { schema }
