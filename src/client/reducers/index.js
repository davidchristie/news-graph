import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import app from './app'

export default combineReducers({
  app,
  routing: routerReducer
})
