const axios = require('axios')

const KEY = process.env.IFRAMELY_KEY

function getArticleDetails ({ url }) {
  return axios.get('http://iframe.ly/api/oembed', {
    params: {
      api_key: KEY,
      url
    }
  })
    .then(response => response.data)
    .then(data => {
      delete data.html
      return data
    })
}

module.exports = {
  getArticleDetails
}
