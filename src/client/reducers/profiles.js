const handlers = {
  FETCH_PROFILE_SUCCESS: (state, { profile }) => {
    return {
      ...state,
      [profile.id]: profile
    }
  }
}

export default (state = {}, action) => {
  if (handlers.hasOwnProperty(action.type)) {
    return handlers[action.type](state, action)
  } else {
    return state
  }
}
