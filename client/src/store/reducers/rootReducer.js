import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import authReducer from './authReducer';
import commentReducer from './commentReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  search: searchReducer,
  auth: authReducer,
  comments: commentReducer,
  errors: errorReducer,
});
export default rootReducer;
