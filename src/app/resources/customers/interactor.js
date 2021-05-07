const _ = require('lodash')
const { NOT_FOUND, ALREADY_CREATED } = require('../../shared/errors')
const entity = require('./entity')

const interactor = {
  create: async customer => {
    const found = await entity.findBy({ document: customer.document })
    if (!_.isEmpty(found)) throw new ALREADY_CREATED(`Document ${customer.document} already created`)
    return entity.create(customer)
  },

  findAll: async list => {
    const customer = await entity.find()
    if (!customer) throw new NOT_FOUND(`Customer '${list[0]}' not found`)
    return customer
  },
  findById: async id => {
    const customer = await entity.findById(id)
    if (!customer) throw new NOT_FOUND(`Customer '${id}' not found`)
    return customer
  },
  updateById: async (id, customer) => {
    const result = await entity.updateById(id, customer)
    return result
  }

}

module.exports = interactor
