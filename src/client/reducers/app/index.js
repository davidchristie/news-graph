import { combineReducers } from 'redux'

import articles from './articles'
import connections from './connections'
import profile from './profile'

export default combineReducers({
  articles,
  connections,
  profile
})
