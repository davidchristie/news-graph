let nextId = 1

const initialState = [
  {
    from: 1,
    id: nextId++,
    name: 'Sourced by',
    to: 2
  },
  {
    from: 2,
    id: nextId++,
    name: 'Sourced by',
    to: 3
  },
  {
    from: 3,
    id: nextId++,
    name: 'Response to',
    to: 1
  },
  {
    from: 3,
    id: nextId++,
    name: 'Response to',
    to: 4
  }
]

export default (state=initialState, action) => {
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
