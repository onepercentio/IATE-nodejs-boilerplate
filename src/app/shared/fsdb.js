const path = require('path')
const fsdb = require('json-fs-db')

const DB_PATH = path.join(__dirname, '..', '..', 'data')

module.exports = fsdb(DB_PATH)
