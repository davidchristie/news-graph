const express = require('express')

const articles = require('./articles')
const authenticate = require('./authenticate')
const jsonwebtokenMiddleware = require('./jsonwebtoken-middleware')
const signup = require('./signup')

const router = express.Router()

router.get('/articles', articles)

router.post('/authenticate', authenticate)

router.post('/profiles', signup)

router.use(jsonwebtokenMiddleware)

module.exports = router
