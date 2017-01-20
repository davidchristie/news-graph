const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const api = require('./api')

const server = express()

server.use(bodyParser.json())
server.use(cors())
server.use(express.static(path.join(__dirname, '../../public')))

server.get('/api/articles', (request, response) => {
  api.getArticles()
    .then(articles => response.json({articles}))
    .catch(error => response.send(error.message))
})
server.post('/api/authenticate', (request, response) => {
  // TODO
  response.json({
    message: 'Authentication successful',
    success: true
  })
})
server.post('/api/login', (request, response) => {
  // TODO
  response.json({
    message: 'Login successful',
    profile: {
      name: 'David Christie',
      token: '54692876.59187654.35248957'
    },
    success: true
  })
})
server.post('/api/signup', (request, response) => {
  // TODO
  response.json({
    message: 'Signup successful',
    profile: {
      name: 'David Christie',
      token: '54692876.59187654.35248957'
    },
    success: true
  })
})

server.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../../public', 'index.html'))
})

module.exports = server
