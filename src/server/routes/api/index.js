const express = require('express')

const articles = require('./articles')
const authenticate = require('./authenticate')
const jsonwebtokenMiddleware = require('./jsonwebtoken-middleware')
const neo4j = require('./../../databases/neo4j')
const signup = require('./signup')

const router = express.Router()

router.use('/articles', articles)

router.post('/authenticate', authenticate)

router.post('/profiles', signup)

router.use(jsonwebtokenMiddleware)

// After jsonwebtoken authentication
router.post('/articles', (request, response) => {
  const userId = request.decoded.id
  const url = request.body.url
  neo4j.postArticle({userId, url})
    .then(result => {
      response.json({
        message: 'Article posted successfully',
        success: true
      })
    })
    .catch(error => {
      response.json({
        message: error.message,
        success: false
      })
    })
})

module.exports = router
