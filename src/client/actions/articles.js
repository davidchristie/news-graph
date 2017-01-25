import { post } from '../api'

let nextId = 1

// TODO Remove this
export function addArticle (article) {
  return {
    article: Object.assign({}, article, {id: nextId++}),
    type: 'ADD_ARTICLE'
  }
}

export function addConnection (name, from, to) {
  return {
    from: from,
    name: name,
    to: to,
    type: 'ADD_CONNECTION'
  }
}

export function postArticle ({ token, url }) {
  return dispatch => {
    dispatch(postArticlePending(url))
    return post('articles', {token, url})
      .then(response => response.data)
      .then(data => {
        if (data.success) {
          return dispatch(postArticleSuccess({url}))
        } else {
          return dispatch(postArticleFailure({
            url,
            message: data.message
          }))
        }
      })
      .catch(error => {
        return dispatch(postArticleFailure({
          alerts: [
            {
              text: error.message,
              type: 'danger'
            }
          ],
          message: error.message,
          url
        }))
      })
  }
}

function postArticlePending ({ url }) {
  return {
    type: 'POST_ARTICLE_PENDING',
    url
  }
}

function postArticleSuccess ({ url }) {
  return {
    type: 'POST_ARTICLE_SUCCESS',
    url
  }
}

function postArticleFailure ({ url, message }) {
  return {
    message,
    type: 'POST_ARTICLE_FAILURE',
    url
  }
}
