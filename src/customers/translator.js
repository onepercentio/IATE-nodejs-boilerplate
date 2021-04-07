const interactor = require('./interactor')

const translator = {
  create: async (req, res, next) => {
    try {
      const customer = {
        ...req.body,
        adminToken: req.token
      }

      const id = await interactor.create(customer)

      res.status(200).json({ id })
    } catch (error) {
      next(error)
    }
  },
  find: async (req, res, next) => {
    try {
      const [ , , ids ] = req.path.split('/')
      const list = ids?.split(',') ?? []

      const customers = await interactor.find(list)

      res.status(200).json(customers)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = translator