import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import account from './account'
import articles from './articles'
import connections from './connections'
import profiles from './profiles'

export default combineReducers({
  account,
  articles,
  connections,
  profiles,
  routing: routerReducer
})
