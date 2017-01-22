import { combineReducers } from 'redux'

import account from './account'
import articles from './articles'
import connections from './connections'

export default combineReducers({
  account,
  articles,
  connections
})
