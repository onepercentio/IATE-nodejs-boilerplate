const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
const app = require('./server')
require('dotenv').config()

const port = process.env.PORT ?? 3000

let mongod = null

const mongo = async () => {
  const mongooseOpts = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
  }

  if (process.env.environment === 'development') {
    mongod = new MongoMemoryServer()
    const uri = await mongod.getUri()
    await mongoose.connect(uri, mongooseOpts)
  } else {
    await mongoose.connect(process.env.uriDb, mongooseOpts)
  }
}

app.listen(port, async () => {
  await mongo()
  console.log(`Boilerplate app listening at http://localhost:${port}`)
})
