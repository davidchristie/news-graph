const jwt = require('jsonwebtoken')

const sql = require('../../databases/sql')

module.exports = (request, response) => {
  const SECRET = process.env.JSON_WEB_TOKEN_SECRET
  const { email = '', password = '' } = request.body
  sql.getUserByEmail(email)
    .then(user => {
      if (user) {
        sql.comparePassword(password, user.password).then(matches => {
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
}
