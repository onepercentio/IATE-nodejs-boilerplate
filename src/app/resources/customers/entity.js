const adapter = require('./adapter')

const entity = {
  find: async (customer) => {
    const result = await adapter.find(customer)
    return result
  },
  findById: async (id) => {
    const result = await adapter.findById(id)
    return result
  },
  findBy: async (customer) => {
    const result = await adapter.findBy(customer)
    return result
  },
  create: async (customer) => {
    const result = await adapter.create(customer)
    return result
  },
  updateById: async (id, customer) => {
    const result = await adapter.updateById(id, customer)
    return result
  }
}

module.exports = entity
