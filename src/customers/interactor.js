const _ = require('lodash')
const { NOT_FOUND, ALREADY_CREATED } = require('../components/errors')
const entity = require('./entity')

const interactor = {
  create: async customer => {
    const found = await entity.findBy({ document: customer.document })

    if (!_.isEmpty(found)) throw new ALREADY_CREATED(`Document ${customer.document} already created`)

    return entity.create(customer)
  },
  find: async list => {
    // for 0 or 1 + n ids, we're not throwing a not found error
    if (list.length !== 1) return entity.find(list)

    // for a single id, the need not found errors
    const customer = await entity.findById(list[0])
    if (!customer) throw new NOT_FOUND(`Customer '${list[0]}' not found`)

    return customer
  }

}

module.exports = interactor