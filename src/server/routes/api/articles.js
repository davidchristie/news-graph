const express = require('express')

const api = require('../../api')

const router = express.Router()

router.get('/', (request, response) => {
  api.getArticles()
    .then(articles => response.json({articles}))
    .catch(error => response.send(error.message))
})

module.exports = router
