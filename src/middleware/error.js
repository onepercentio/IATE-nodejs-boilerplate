const { toHTTP } = require('../components/errors')

module.exports = (err, req, res, next) => {
  // log to a logging tool
  console.log(err)
  if (res.headersSent) return next(err)

  toHTTP(err, res)
}