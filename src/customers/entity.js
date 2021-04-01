const adapter = require('./adapter')

const entity = {
  find: adapter.find,
  findById: adapter.findById
}

module.exports = entity