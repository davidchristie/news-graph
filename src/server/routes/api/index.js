const express = require('express')

const iframely = require('../../externals/iframely')
// const newsapi = require('../../externals/newsapi')
const articles = require('./articles')
const authenticate = require('./authenticate')
const graphql = require('./graphql')
const jsonwebtokenMiddleware = require('./jsonwebtoken-middleware')
const neo4j = require('./../../databases/neo4j')
const signup = require('./signup')

const router = express.Router()

router.use('/articles', articles)

router.post('/authenticate', authenticate)

router.use('/graphql', graphql)

router.post('/profiles', signup)

router.get('/profiles/:id', (request, response) => {
  const userId = Number(request.params.id)
  neo4j.getProfileById({userId})
    .then(profile => {
      return response.status(200).json(profile)
    })
    .catch(error => {
      return response.status(500).send(error.message)
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
