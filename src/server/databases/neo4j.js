const neo4j = require('neo4j-driver').v1

const USERNAME = process.env.NEO4J_USERNAME
const PASSWORD = process.env.NEO4J_PASSWORD
const driver = neo4j.driver(
  'bolt://localhost:7687',
  neo4j.auth.basic(USERNAME, PASSWORD)
)

const createProfile = ({ id, name }) => {
  const session = driver.session()
  return session
    .run('CREATE (a:Profile {id: {id}, name: {name}})', {id, name})
    .then(() => {
      session.close()
    })
    .then(() => {
      return {
        id,
        name
      }
    })
}

const postArticle = ({ userId, url }) => {
  const session = driver.session()
  return session
    .run(`
      MATCH (profile:Profile)
      WHERE profile.id = {userId}
      CREATE (article:Article {url: {url}})
      CREATE (profile)-[:HAS_POSTED]->(article)
      `, {userId, url})
    .then(result => {
      session.close()
      return result
    })
}

module.exports = {
  createProfile,
  postArticle
}
