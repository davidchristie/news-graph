const api = require('../../api')

module.exports = (request, response) => {
  api.getArticles()
    .then(articles => response.json({articles}))
    .catch(error => response.send(error.message))
}
