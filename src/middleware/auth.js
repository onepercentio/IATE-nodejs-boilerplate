const { UNAUTHORIZED } = require('../components/errors')

module.exports = async (req, res, next) => {
  try {
    // perform some auth validation
    if (!req.token) throw new UNAUTHORIZED('Missing credentials')
    if (req.token !== 'admintoken') throw new UNAUTHORIZED('Invalid credentials')
    next()
  } catch (error) {
    next(error)
  }
}