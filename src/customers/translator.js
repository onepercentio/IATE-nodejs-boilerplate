const interactor = require('./interactor')

const translator = {
  find: async (req, res, next) => {
    try {
      const list = req.params.split(',')

      const customers = await interactor.find(list)

      res.status(200).json(customers)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = translator