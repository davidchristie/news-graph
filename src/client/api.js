import axios from 'axios'

const { origin } = window.location
const instance = axios.create({
  baseURL: `${origin}/api`,
  timeout: 2000
})

export function getFeaturedArticles () {
  return get('articles/featured')
    .then(response => response.data.articles)
}

export function get (path, data) {
  return instance.get(path, data)
}

export function post (path, data) {
  return instance.post(path, data)
}
