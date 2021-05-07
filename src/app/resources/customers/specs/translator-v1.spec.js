/* eslint-disable no-undef */
const express = require('express')
const request = require('supertest')
const serverRoutes = require('../../../../../server')

const app = express()
app.use(serverRoutes)

jest.mock('../interactor', () => jest.fn().mockImplementation(() => ({
  create: jest.fn().mockReturnValue(42)
})))

describe('POST /customers', () => {
  it('When payLoad is null return 422', async () => {
    const res = await request(app).post('/customers')
      .send({})
    expect(res.status).toBe(422)
  })
})
