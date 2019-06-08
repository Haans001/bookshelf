import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const middlware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middlware));

const Store = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
export default Store;
