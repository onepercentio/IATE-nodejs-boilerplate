const { toHTTP } = require('../errors')

module.exports = (err, req, res, next) => {
  // log to a logging tool
  if (res.headersSent) return next(err)

  toHTTP(err, res)
}
