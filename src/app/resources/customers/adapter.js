/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
const _ = require('lodash')
const uuid = require('uuid')

const Customer = require('./customerModel')

const db = Customer

const adapter = {
  find: async list => {
    const customerList = db.find()

    if (_.isEmpty(list)) return customerList

    return customerList.filter(({ id }) => list.includes(id))
  },

  findById: id => db.findById({ _id: id }),

  findBy: async filters => db.find({ document: filters.document }),

  create: async customer => {
    customer.id = uuid.v4()
    const result = await new Customer(customer).save()
    return result._id
  },
  updateById: async (id, customer) => {
    const result = await db.findOneAndUpdate({ _id: id }, customer, { new: true })
    return result
  }
}

module.exports = adapter
