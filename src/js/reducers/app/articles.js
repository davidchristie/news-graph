let nextId = 1

export default (state=[], action) => {
  switch (action.type) {
  case 'POST_ARTICLE':
    return [...state, {
      id: nextId++,
      url: action.url
    }]
  default:
    return state
  }
}
