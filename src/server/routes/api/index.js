const express = require('express')

const articles = require('./articles')
const jsonwebtokenMiddleware = require('./jsonwebtoken-middleware')
const login = require('./login')
const signup = require('./signup')

const router = express.Router()

router.get('/articles', articles)

router.post('/login', login)

router.post('/signup', signup)

router.use(jsonwebtokenMiddleware)

module.exports = router
