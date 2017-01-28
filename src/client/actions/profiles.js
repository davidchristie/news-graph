import { get } from '../api'

export const fetchProfile = ({ userId }) => {
  return dispatch => {
    dispatch(fetchProfilePending({userId}))
    return get(`/profiles/${userId}`)
      .then(response => {
        const profile = response.data
        return dispatch(fetchProfileSuccess({
          userId,
          profile
        }))
      })
      .catch(error => {
        return dispatch(fetchProfileFailure({
          message: error.message,
          userId
        }))
      })
  }
}

export const fetchProfileFailure = ({ message, userId }) => {
  return {
    message,
    type: 'FETCH_PROFILE_FAILURE',
    userId
  }
}

export const fetchProfilePending = ({ userId }) => {
  return {
    type: 'FETCH_PROFILE_PENDING',
    userId
  }
}

export const fetchProfileSuccess = ({ profile, userId }) => {
  return {
    profile,
    type: 'FETCH_PROFILE_SUCCESS',
    userId
  }
}

// export const getProfilePosts = ({ userId }) => {
//   return dispatch => {
//     dispatch(getProfilePostsPending({userId}))
//     return get(`/profiles/${userId}/posts`)
//       .then(response => {
//         const data = response.data
//         const posts = data.posts
//         return dispatch(getProfilePostsSuccess({
//           userId,
//           posts
//         }))
//       })
//       .catch(error => {
//         return dispatch(getProfilePostsFailure({
//           message: error.message,
//           userId
//         }))
//       })
//   }
// }
//
// export const getProfilePostsFailure = ({ message, userId }) => {
//   return {
//     message,
//     type: 'GET_PROFILE_POSTS_FAILURE',
//     userId
//   }
// }
//
// export const getProfilePostsPending = ({ userId }) => {
//   return {
//     type: 'GET_PROFILE_POSTS_PENDING',
//     userId
//   }
// }
//
// export const getProfilePostsSuccess = ({ posts, userId }) => {
//   return {
//     posts,
//     type: 'GET_PROFILE_POSTS_SUCCESS',
//     userId
//   }
// }
