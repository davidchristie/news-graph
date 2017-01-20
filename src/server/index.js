const dotenv = require('dotenv')

const server = require('./server')

dotenv.config()

const port = process.env.port || 8080

server.listen(port, () => console.log('http://localhost:' + port))
