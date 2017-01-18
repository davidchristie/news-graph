import axios from 'axios'

export function getArticles () {

  // return getArticlesFromSourceId('the-guardian-uk')

  return getArticlesFromSourceId('google-news')

  // getSources().then(sources => console.log('Sources:', (sources)))

  // const KEY = process.env.NEWSAPI_KEY
  // return axios(`https://newsapi.org/v1/articles?source=techcrunch&apiKey=${KEY}`)
  //   .then(response => response.data.articles)

  // XXX Loads to many articles
  // return getSources()
  //   .then(sources => {
  //     return Promise.all(sources.map(source => getArticlesFromSourceId(source.id)))
  //       .then(values => {
  //         return values.reduce((a, b) => a.concat(b))
  //       })
  //   })
}

function getArticlesFromSourceId (sourceId) {
  const KEY = process.env.NEWSAPI_KEY
  const url = 'https://newsapi.org/v1/articles?source=' + sourceId + '&apiKey=' + KEY
  // return axios(`https://newsapi.org/v1/articles?source=${sourceId}&apiKey=${KEY}`)
  return axios(url)
    .then(response => response.data.articles)
}

export function getSources () {
  return axios('https://newsapi.org/v1/sources?language=en')
    .then(response => response.data.sources)
}
