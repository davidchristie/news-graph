const express = require('express')
const jwt = require('jsonwebtoken')

const api = require('../api')
const db = require('../db')

const router = express.Router()

router.get('/articles', (request, response) => {
  api.getArticles()
    .then(articles => response.json({articles}))
    .catch(error => response.send(error.message))
})

router.post('/login', (request, response) => {
  const SECRET = process.env.JSON_WEB_TOKEN_SECRET
  const { email = '', password = '' } = request.body
  db.getUserByEmail(email)
    .then(user => {
      if (user) {
        db.comparePassword(password, user.password).then(matches => {
          if (matches) {
            const token = jwt.sign({
              id: user.id
            }, SECRET, {
              expiresIn: '1h'
            })
            return response.json({
              message: 'Enjoy your token!',
              profile: {
                email: user.email,
                id: user.id,
                name: user.name,
                token
              },
              success: true
            })
          } else {
            return response.json({
              success: false,
              message: 'Authentication failed. Wrong password.'
            })
          }
        })
      } else {
        return response.json({
          message: 'Authentication failed. User not found.',
          success: false
        })
      }
    })
    .catch(error => {
      console.log(error)
      return response.json({
        message: 'Authentication failed. Couldn\'t reach database.',
        success: false
      })
    })
})

router.post('/signup', (request, response) => {
  request.checkBody('name', 'Name is required').notEmpty()
  request.checkBody('email', 'Email is required').notEmpty()
  request.checkBody('email', 'Email is not valid').isEmail()
  request.checkBody('password', 'Password is required').notEmpty()
  request.checkBody('password2', 'Passwords do not match').equals(request.body.password)

  const errors = request.validationErrors() || []

  const { name, email, password } = request.body

  Promise.all([
    db.getUserByEmail(email),
    db.getUserByName(name)
  ])
    .then(users => {
      if (users[0]) {
        errors.push({
          message: `${email} is already signed up.`
        })
      }
      if (users[1]) {
        errors.push({
          message: `${name} is taken.`
        })
      }
    })
    .then(() => {
      if (errors.length === 0) {
        db.createUser({email, name, password})
          .then(() => {
            const alerts = [
              {
                text: 'Signup successful',
                type: 'success'
              }
            ]
            return response.json({
              alerts,
              message: 'Signup successful',
              success: true
            })
          })
      } else {
        const alerts = errors.map(({message}) => {
          return {
            text: message,
            type: 'danger'
          }
        })
        return response.json({
          alerts,
          message: 'Signup failed',
          success: false
        })
      }
    })
})

router.use((request, response, next) => {
  const SECRET = process.env.JSON_WEB_TOKEN_SECRET

  // check header or url parameters or post parameters for token
  const token = request.body.token || request.query.token || request.headers.token

  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, SECRET, (error, decoded) => {
      if (error) {
        return response.json({
          success: false,
          message: 'Failed to authenticate token.'
        })
      } else {
        // if everything is good, save to request for use in other routes
        request.decoded = decoded
        next()
      }
    })
  } else {
    // if there is no token
    // return an error
    return response.status(403).send({
      success: false,
      message: 'No token provided.'
    })
  }
})

module.exports = router
