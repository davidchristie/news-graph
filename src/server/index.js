require('dotenv').config() // Do this first.

const server = require('./server')

const port = process.env.port || 8080

server.listen(port, () => console.log('http://localhost:' + port))
