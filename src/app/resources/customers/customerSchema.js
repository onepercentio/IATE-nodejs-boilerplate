const Joi = require('@hapi/joi')

const customerSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  document: Joi.number().required()

})

module.exports = { customerSchema }
