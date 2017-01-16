function nextId (articles) {
  const existing = articles.map(article => article.id)
  return Math.max([...existing]) + 1
}

export default (state=[], action) => {
  switch (action.type) {
  case 'POST_ARTICLE':
    return [...state, {
      id: nextId(state),
      url: action.url
    }]
  default:
    return state
  }
}
