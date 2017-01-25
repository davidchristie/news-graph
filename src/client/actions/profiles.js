import { get } from '../api'

export const getProfilePosts = ({ userId }) => {
  return dispatch => {
    dispatch(getProfilePostsPending({userId}))
    return get(`/profiles/${userId}/posts`)
      .then(response => {
        const data = response.data
        const posts = data.posts
        return dispatch(getProfilePostsSuccess({
          userId,
          posts
        }))
      })
      .catch(error => {
        return dispatch(getProfilePostsFailure({
          message: error.message,
          userId
        }))
      })
  }
}

export const getProfilePostsPending = ({ userId }) => {
  return {
    type: 'GET_PROFILE_POSTS_PENDING',
    userId
  }
}

export const getProfilePostsFailure = ({ message, userId }) => {
  return {
    message,
    type: 'GET_PROFILE_POSTS_FAILURE',
    userId
  }
}

export const getProfilePostsSuccess = ({ posts, userId }) => {
  return {
    posts,
    type: 'GET_PROFILE_POSTS_SUCCESS',
    userId
  }
}
