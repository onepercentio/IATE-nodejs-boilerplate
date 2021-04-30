const express = require('express')
const serverRoutes = require('../../../../../server')
const request = require('supertest')

const app = express()
app.use(serverRoutes)

describe('POST /person', () => {
  test('When payLoad is null return 422', async () => {
    const res = await request(app).post('/person')
      .send({})
    expect(res.status).toBe(422)
  })
})
