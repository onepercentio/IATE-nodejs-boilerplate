const express = require('express')
const serverRoutes = require('../../../../../server')
const request = require('supertest')

const app = express()
app.use(serverRoutes)

describe('POST /customers', () => {
  test('When payLoad is null return 422', async () => {
    const res = await request(app).post('/customers')
      .send({})
    expect(res.status).toBe(422)
  })
})

// describe('POST /customers', () => {
//   test('When payLoad is true return 200', async () => {
//     const customer = {
//       name: "Christian",
//       email: "cburgard.trajano@gmail.com",
//       document: 0
//     }
//     const response = await request(app).post("/customers").send(customer)
//     expect(response.body).toHaveProperty('_id')
//     expect(response.body).toHaveProperty('name')
//     expect(response.body).toHaveProperty('email')
//     expect(response.body).toHaveProperty('documento')
//     expect(response.status).toBe(200)
//   })
// })
