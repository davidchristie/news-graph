let nextId = 1

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

// TODO
export function postArticle (url) {
  throw Error('Operation not supported')
  return {
    url,
    type: 'POST_ARTICLE'
  }
}
