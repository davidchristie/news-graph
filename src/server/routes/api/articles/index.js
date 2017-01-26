const express = require('express')

const neo4j = require('../../../databases/neo4j')
// const newsapi = require('../../../externals/newsapi')

const router = express.Router()

router.get('/featured', (request, response) => {
  return neo4j.getRecentArticles()
    .then(articles => response.json({articles}))
    .catch(error => response.send(error.message))

  // newsapi.getArticles()
  //   .then(articles => response.json({articles}))
  //   .catch(error => response.send(error.message))
})

module.exports = router
