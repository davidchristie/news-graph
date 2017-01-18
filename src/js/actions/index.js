export function addArticle (article) {
  return {
    article,
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

export function postArticle (url) {
  return {
    url,
    type: 'POST_ARTICLE'
  }
}
