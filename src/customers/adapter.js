const _ = require('lodash')
const uuid = require('uuid')
const db = require('../components/fsdb')

const COLLECTION = 'customers'

const adapter = {
  find: async list => {
    const { __filePath, ...customers } = await db.get(COLLECTION)

    const customerList = _.values(customers)

    if (_.isEmpty(list)) return customerList

    return customerList.filter(({ id }) => list.includes(id))
  },
  findById: id => db.get(`${COLLECTION}.${id}`),
  findBy: async filters => {
    const { __filePath, ...customers } = await db.get(COLLECTION)

    const customerList = _.values(customers)

    return _.filter(customerList, filters)
  },
  create: async customer => {
    const id = uuid.v4()
    await db.set(`${COLLECTION}.${id}`, { id, ...customer })

    return id
  }
}

module.exports = adapter