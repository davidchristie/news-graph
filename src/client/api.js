import axios from 'axios'

export function getArticles () {
  return get('articles')
    .then(response => response.data.articles)
}

function get (path, data) {
  const { origin } = window.location
  const url = `${origin}/api/${path}`
  return axios.get(url, data)
    .catch(error => { throw error })
}

export function login (email, password) {
  return post('login', {email, password})
    .then(response => response.data)
}

function post (path, data) {
  const { origin } = window.location
  const url = `${origin}/api/${path}`
  return axios.post(url, data)
    .catch(error => { throw error })
}

export function signup (details) {
  return post('signup', details)
    .then(response => response.data)
}
