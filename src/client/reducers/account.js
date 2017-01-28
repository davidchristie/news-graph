export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {profile: action.profile}
    case 'LOGOUT_SUCCESS':
      return {}
    default:
      return state
  }
}
