/* eslint-disable arrow-body-style */
/* eslint-disable no-undef */
const { stub } = require('sinon')
const interector = require('../interactor')
const entity = require('../entity')

describe('Test Interector', () => {
  it('should return id of type number', async () => {
    const customer = {
      name: 'Christian',
      email: 'cburgard.trajano@gmail.com',
      document: 0,
      id: 1
    }

    stub(entity, 'findBy')
      .returns(Promise.resolve(null))

    stub(entity, 'create')
      .returns(Promise.resolve(customer.id))

    const result = await interector.create(customer)

    expect(result).toBe(1)
  })

  it('should return a list of customers', async () => {
    const listOutput = [
      {
        name: 'Julia Burgard',
        email: 'jburgard@gmail.com',
        document: 0,
        id: 1
      },
      {
        name: 'Christian Burgard',
        email: 'cburgard.trajano@gmail.com',
        document: 0,
        id: 2
      }
    ]
    stub(entity, 'find')
      .returns(Promise.resolve(listOutput))
    const result = await interector.findAll(listOutput)
    expect(result).toEqual(listOutput)
  })
})
