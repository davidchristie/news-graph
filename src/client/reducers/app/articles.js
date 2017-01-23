// Article:
// {
//   author
//   description
//   publishedAt
//   title
//   url
//   urlToImage
// }

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_ARTICLE':
      return [...state, action.article]
    default:
      return state
  }
}
