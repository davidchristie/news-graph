export function addArticle (article) {
  return {
    article,
    type: 'ADD_ARTICLE'
  }
}

export function addConnection (name, from, to) {
  return {
    from: from,
    name: name,
    to: to,
    type: 'ADD_CONNECTION'
  }
}

export function loginSuccess (response) {
  return {
    message: response.message,
    profile: response.profile,
    type: 'LOGIN_SUCCESS'
  }
}

export function logout (message) {
  return {
    message,
    type: 'LOGOUT'
  }
}

export function postArticle (url) {
  return {
    url,
    type: 'POST_ARTICLE'
  }
}

export function signupFailure (response) {
  return {
    message: response.message,
    type: 'SIGNUP_FAILURE'
  }
}

export function signupSuccess (response) {
  return {
    message: response.message,
    profile: response.profile,
    type: 'SIGNUP_SUCCESS'
  }
}
