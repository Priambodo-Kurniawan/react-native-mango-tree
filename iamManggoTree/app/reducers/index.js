import { combineReducers } from 'redux';

import treeReducer from './reducers'

export default combineReducers({
  tree: treeReducer,
})
