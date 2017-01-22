const bcrypt = require('bcrypt')
const knex = (environment => {
  const config = require('../../knexfile')[environment]
  return require('knex')(config)
})(process.env.NODE_ENV || 'development')

const saltRounds = 10

function comparePassword (password, hash) {
  return bcrypt.compare(password, hash)
}

function createUser ({ email, name, password }) {
  return bcrypt.hash(password, saltRounds).then(hash => {
    return knex('users').insert({
      email,
      password: hash,
      name
    })
  })
}

function getUserByEmail (email) {
  return knex('users').where('email', email).first()
}

function getUserById (id) {
  return knex('users').where('id', id).first()
}

function getUserByName (name) {
  return knex('users').where('name', name).first()
}

module.exports = {
  comparePassword,
  createUser,
  getUserByEmail,
  getUserById,
  getUserByName
}
