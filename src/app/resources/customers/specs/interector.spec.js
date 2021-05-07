/* eslint-disable no-underscore-dangle */
/* eslint-disable arrow-body-style */
/* eslint-disable no-undef */
const { stub } = require('sinon')
const entity = require('../entity')
const interactor = require('../interactor')

describe('Test Interector', () => {
  it('should return id of type string when a user is saved', async () => {
    const customer = {
      name: 'Christian',
      email: 'cburgard.trajano@gmail.com',
      document: 0,
      _id: 'd687as69d6Aa78s6d786as6d7w'
    }

    stub(entity, 'findBy')
      .returns(Promise.resolve(null))

    stub(entity, 'create')
      .returns(Promise.resolve(customer._id))

    const result = await interactor.create(customer)

    expect(result).toEqual('d687as69d6Aa78s6d786as6d7w')
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
    const result = await interactor.findAll(listOutput)
    expect(result).toEqual(listOutput)
  })

  it('should return a customer by id', async () => {
    const id = 'd687as69d6Aa78s6d786as6d7w'
    const customer = {
      name: 'Christian',
      email: 'cburgard.trajano@gmail.com',
      document: 0,
      _id: 'd687as69d6Aa78s6d786as6d7w'
    }
    stub(entity, 'findById')
      .returns(Promise.resolve(customer))
    const result = await interactor.findById(id)
    expect(result).toEqual(customer)
  })

  it('should return a customer edited by id', async () => {
    const id = 'd687as69d6Aa78s6d786as6d7w'
    const customer = {
      name: 'Christian Trajano',
      email: 'cburgard.trajano@gmail.com',
      document: 0,
      _id: 'd687as69d6Aa78s6d786as6d7w'
    }
    stub(entity, 'updateById')
      .returns(Promise.resolve(customer))
    const result = await interactor.updateById(id)
    expect(result).toEqual(customer)
  })
})
