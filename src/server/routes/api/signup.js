const sql = require('../../databases/sql')

module.exports = (request, response) => {
  request.checkBody('name', 'Name is required').notEmpty()
  request.checkBody('email', 'Email is required').notEmpty()
  request.checkBody('email', 'Email is not valid').isEmail()
  request.checkBody('password', 'Password is required').notEmpty()
  request.checkBody('password2', 'Passwords do not match').equals(request.body.password)

  const errors = request.validationErrors() || []

  const { name, email, password } = request.body

  Promise.all([
    sql.getUserByEmail(email),
    sql.getUserByName(name)
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
        sql.createUser({email, name, password})
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
}
