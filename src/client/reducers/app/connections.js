let nextId = 1

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_CONNECTION':
      return [...state, {
        form: action.from,
        id: nextId++,
        name: action.name,
        to: action.to
      }]
    default:
      return state
  }
}
