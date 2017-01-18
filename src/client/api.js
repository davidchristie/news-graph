import axios from 'axios'

export function getArticles () {
  return sendRequest('articles')
}

function sendRequest (path) {
  const { hostname, port } = window.location
  const url = `http://${hostname}:${port}/api/${path}`
  return axios(url)
    .then(response => response.data.articles)
    .catch(error => { throw error })
}
