const express = require('express')

const iframely = require('../../externals/iframely')
const newsapi = require('../../externals/newsapi')
const authenticate = require('./authenticate')
const jsonwebtokenMiddleware = require('./jsonwebtoken-middleware')
const neo4j = require('./../../databases/neo4j')
const signup = require('./signup')

const router = express.Router()

router.get('/articles/featured', (request, response) => {
  newsapi.getArticles()
    .then(articles => response.json({articles}))
    .catch(error => response.send(error.message))
})

router.post('/authenticate', authenticate)

router.post('/profiles', signup)

router.get('/profiles/:id/posts', (request, response) => {
  const userId = Number(request.params.id)
  neo4j.getProfilePosts({userId})
    .then(posts => {
      return response.json({
        posts,
        success: true
      })
    })
    .catch(error => {
      return response.json({
        message: error.message,
        success: false
      })
    })
})

router.use(jsonwebtokenMiddleware)

// After jsonwebtoken authentication
router.post('/articles', (request, response) => {
  const userId = request.decoded.id
  const url = request.body.url
  iframely.getArticleDetails({url})
    .then(article => {
      return neo4j.postArticle({article, userId})
        .then(() => {
          return response.json({
            article,
            message: 'Article posted successfully',
            success: true
          })
        })
    })
    .catch(error => {
      return response.json({
        message: error.message,
        success: false
      })
    })

  // TODO Remove this
  // const userId = request.decoded.id
  // const url = request.body.url
  // neo4j.postArticle({userId, url})
  //   .then(result => {
  //     return response.json({
  //       message: 'Article posted successfully',
  //       success: true
  //     })
  //   })
  //   .catch(error => {
  //     return response.json({
  //       message: error.message,
  //       success: false
  //     })
  //   })
})

module.exports = router