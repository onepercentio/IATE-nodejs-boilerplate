const adapter = require('../useCases/adapter')

const entity = {
  find: adapter.find,
  findById: adapter.findById,
  findBy: adapter.findBy,
  create: adapter.create
}

module.exports = entity
