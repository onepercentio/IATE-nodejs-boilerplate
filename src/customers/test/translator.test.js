const { expect } = require('chai')
const sinon = require('sinon')

const translator = require('../translator')
const interactor = require('../interactor')

describe('The customers translator', () => {

  let reqStub
  let resStub
  let nextStub
  let statusStub
  let jsonStub
  let findStub

  beforeEach(() => {
    reqStub = {
      path: '/customers',
      params: {},
      query: {},
      body: {},
      headers: {}
    }

    statusStub = sinon.stub()
    jsonStub = sinon.stub()
    statusStub.returns({ json: jsonStub })
    resStub = { status: statusStub }
    nextStub = sinon.stub()

    findStub = sinon.stub(interactor, 'find')
  })

  afterEach(() => {
    findStub.restore()
  })

  describe('when creating a new customer', () => {

    it('should ')

  })

  describe('when looking for customers', () => {

    it('should call next with and error if something throws', async () => {
      const error = new Error('some error')
      findStub.throws(error)

      await translator.find(reqStub, resStub, nextStub)

      expect(statusStub.callCount).to.eql(0)
      expect(jsonStub.callCount).to.eql(0)
      expect(nextStub.firstCall.args).to.eql([ error ])
    })

    it('should pass an empty array to interactor if there are no ids in the path and return found customers', async () => {
      findStub.resolves([ 'customer1' ])
      await translator.find(reqStub, resStub, nextStub)

      expect(statusStub.firstCall.args).to.eql([ 200 ])
      expect(jsonStub.firstCall.args).to.eql([ [ 'customer1' ] ])
      expect(nextStub.callCount).to.eql(0)
    })

    it('should pass an array of ids to interactor and return found customers', async () => {
      findStub.resolves([ 'customer1' ])
      reqStub.path += '/customer1,customer2'
      await translator.find(reqStub, resStub, nextStub)

      expect(statusStub.firstCall.args).to.eql([ 200 ])
      expect(jsonStub.firstCall.args).to.eql([ [ 'customer1' ] ])
      expect(nextStub.callCount).to.eql(0)
    })

  })

})