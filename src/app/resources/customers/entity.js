const adapter = require('./adapter')

const entity = {
  find: adapter.find,
  findById: adapter.findById,
  findBy: adapter.findBy,
  create: adapter.create,
  updateById: adapter.updateById
}

module.exports = entity
