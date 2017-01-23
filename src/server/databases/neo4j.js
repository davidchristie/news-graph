const neo4j = require('neo4j-driver').v1

const driver = neo4j.driver(
  'bolt://localhost:7687',
  neo4j.auth.basic(
    process.env.NEO4J_USERNAME,
    process.env.NEO4J_PASSWORD
  )
)

const session = driver.session()
session
  .run(`CREATE (a:Person {name: {name}, title: {title}})`,
    {name: 'Arthur', title: 'King'})
  .then(() => {
    return session.run('MATCH (a:Person) WHERE a.name = {name} RETURN a.name AS name, a.title AS title',
        {name: 'Arthur'})
  })
  .then(result => {
    const title = result.records[0].get('title')
    const name = result.records[0].get('name')
    console.log(title + ' ' + name)
    session.close()
    driver.close()
  })
