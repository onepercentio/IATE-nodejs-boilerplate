const mongoose = require('mongoose')

const customerModel = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  document: {
    type: Number
  }
}, {
  timestamp: true
})

module.exports = mongoose.model('Customer', customerModel)
