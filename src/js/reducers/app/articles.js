let nextId = 1

// Article:
// {
//   author
//   description
//   publishedAt
//   title
//   url
//   urlToImage
// }

function createArticle(article) {
  return Object.assign(article, {id: nextId++})
}

export default (state=[], action) => {
  switch (action.type) {
  case 'ADD_ARTICLE':
    return [...state, createArticle(action.article)]
  case 'POST_ARTICLE': // FIXME Needs to fetch article title, urlToImage etc
    return [...state, {
      id: nextId++,
      url: action.url
    }]
  default:
    return state
  }
}
