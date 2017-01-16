function nextId (connections) {
  const existing = connections.map(connection => connection.id)
  return Math.max([...existing]) + 1
}

export default (state=[], action) => {
  switch (action.type) {
  case 'ADD_CONNECTION':
    return [...state, {
      form: action.from,
      id: nextId(state),
      name: action.name,
      to: action.to
    }]
  default:
    return state
  }
}
