import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import authReducer from './authReducer';
import commentReducer from './commentReducer';

const rootReducer = combineReducers({
  search: searchReducer,
  auth: authReducer,
  comments: commentReducer,
});
export default rootReducer;
