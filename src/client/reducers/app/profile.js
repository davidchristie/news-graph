// Profile:
// {
//   name
//   token
// }

export default (state = null, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return action.profile
    case 'LOGOUT':
      return null
    case 'SIGNUP_SUCCESS':
      return action.profile
    default:
      return state
  }
}
