let nextId = 1

const initialState = [
  {
    id: nextId++,
    url: 'http://www.nature.com/news/ancient-retroviruses-emerged-half-a-billion-years-ago-1.21274'
  },
  {
    id: nextId++,
    url: 'https://www.theguardian.com/world/2017/jan/11/chamber-of-rats-mexico-parliaments-name-changed-in-google-maps-prank'
  },
  {
    id: nextId++,
    url: 'https://vimeo.com/192574852'
  },
  {
    id: nextId++,
    url: 'http://www.aljazeera.com/indepth/features/2017/01/india-love-hand-books-170108073151216.html'
  }
]

export default (state=initialState, action) => {
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
