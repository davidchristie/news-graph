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

const getProfilePosts = ({userId}) => {
  const session = driver.session()
  return session
    .run(`
      MATCH (profile:Profile)-[post:HAS_POSTED]->(content)
      WHERE profile.id = {userId}
      RETURN post, content
      ORDER BY post.time DESC
      `, {userId})
    .then(result => {
      session.close()
      return result
    })
    .then(result => {
      const records = result.records
      const posts = []
      for (let record of records) {
        const post = record._fields[0]
        const content = record._fields[1]
        const time = post.properties.time
        posts.push({
          content: content.properties,
          time,
          type: content.labels[0].toUpperCase()
        })
      }
      return posts
    })
}

const postArticle = ({ userId, url }) => {
  // TODO Only create article if it doesn't already exist.
  const session = driver.session()
  return session
    .run(`
      MATCH (profile:Profile)
      WHERE profile.id = {userId}
      CREATE (article:Article {url: {url}})
      CREATE (profile)-[:HAS_POSTED {time: {time}}]->(article)
      `, {
        time: Date.now(),
        userId,
        url
      })
    .then(result => {
      session.close()
      return result
    })
}

module.exports = {
  createProfile,
  getProfilePosts,
  postArticle
}
