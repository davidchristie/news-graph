const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const validator = require('express-validator')
const morgan = require('morgan')
const path = require('path')

const api = require('./routes/api')

const server = express()

server.use(morgan('dev'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: false}))
server.use(cors())
server.use(express.static(path.join(__dirname, '../../public')))
server.use(validator({
  errorFormatter: (param, message, value) => {
    const namespace = param.split('.')
    const root = namespace.shift()
    let formParam = root
    while (namespace.length) {
      formParam += '[' + namespace.shift() + ']'
    }
    return {
      param: formParam,
      message,
      value
    }
  }
}))

server.use('/api', api)

server.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../../public', 'index.html'))
})

module.exports = server
