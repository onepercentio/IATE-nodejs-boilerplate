/* eslint-disable no-undef */
const { stub } = require('sinon')
const entity = require('../entity')
const adapter = require('../adapter')

describe('Name of the group', () => {
  it('should ', async () => {
    const customerIn = {
      name: 'Christian Burgard',
      document: 1,
      email: 'cburgard.trajano@gmail.com'
    }
    const customerOut = {
      name: 'Christian Burgard',
      document: 1,
      email: 'cburgard.trajano@gmail.com',
      _id: 'jasodij223ueajq82'
    }
    stub(adapter, 'create').returns(Promise.resolve(customerOut))
    const result = await entity.create(customerIn)
    expect(result).toEqual(customerOut)
  })

  it('should ', async () => {
    const customerOut = [
      {
        name: 'Christian Burgard',
        document: 1,
        email: 'cburgard.trajano@gmail.com',
        _id: 'jasodij223ueajq82'
      },
      {
        name: 'Christian Burgard',
        document: 1,
        email: 'cburgard.trajano@gmail.com',
        _id: 'jasodij223ueajq82'
      }
    ]
    stub(adapter, 'find').returns(Promise.resolve(customerOut))
    const result = await entity.find()
    expect(result).toEqual(customerOut)
  })

  it('should ', async () => {
    const customerIn = 'jasodij223ueajq82'
    const customerOut = {
      name: 'Christian Burgard',
      document: 1,
      email: 'cburgard.trajano@gmail.com',
      _id: 'jasodij223ueajq82'
    }
    stub(adapter, 'findById').returns(Promise.resolve(customerOut))
    const result = await entity.findById(customerIn)
    expect(result).toEqual(customerOut)
  })

  it('should ', async () => {
    const customerId = 'jasodij223ueajq82'
    const customerIn = {
      name: 'Christian Burgard trajano'
    }
    const customerOut = {
      name: 'Christian Burgard trajano',
      document: 1,
      email: 'cburgard.trajano@gmail.com',
      _id: 'jasodij223ueajq82'
    }
    stub(adapter, 'updateById').returns(Promise.resolve(customerOut))
    const result = await entity.updateById(customerId, customerIn)
    expect(result).toEqual(customerOut)
  })
})
