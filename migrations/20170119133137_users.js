exports.up = function (knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('name').unique()
    table.string('email').unique()
    table.string('hash_password')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
