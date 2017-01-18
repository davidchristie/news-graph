import { combineReducers } from 'redux'

import articles from './articles'
import connections from './connections'

export default combineReducers({
  articles,
  connections
})
