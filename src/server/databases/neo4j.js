const neo4j = require('neo4j-driver').v1

const USERNAME = process.env.NEO4J_USERNAME
const PASSWORD = process.env.NEO4J_PASSWORD
const driver = neo4j.driver(
  'bolt://localhost:7687',
  neo4j.auth.basic(USERNAME, PASSWORD)
)

const createProfile = ({id, name}) => {
  const session = driver.session()
  return session
    .run('CREATE (a:Profile {id: {id}, name: {name}})', {id, name})
    .then(function () {
      session.close()
    })
    .then(function (result) {
      return {
        id,
        name
      }
    })
}

module.exports = {
  createProfile
}
