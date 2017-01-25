const axios = require('axios')

module.exports = {
  getArticles,
  getArticlesFromSourceId,
  getSources
}

function getArticles () {
  return getArticlesFromSourceId('google-news')
    // return getArticlesFromSourceId('the-guardian-uk')
}

function getArticlesFromSourceId (sourceId) {
  const KEY = process.env.NEWSAPI_KEY
  const url = 'https://newsapi.org/v1/articles?source=' + sourceId + '&apiKey=' + KEY
  return axios(url)
    .then(response => response.data.articles)
}

function getSources () {
  return axios('https://newsapi.org/v1/sources?language=en')
    .then(response => response.data.sources)
}
