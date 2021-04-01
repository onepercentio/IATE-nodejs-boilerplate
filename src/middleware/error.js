const { toHttp } = require('../components/errors')

module.exports = (err, req, res, next) => {
  // log to a logging tool
  if (res.headersSent) return next(err)

  toHttp(err, res)
}