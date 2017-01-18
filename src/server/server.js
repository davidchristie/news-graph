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

server.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../../public', 'index.html'))
})

module.exports = server
