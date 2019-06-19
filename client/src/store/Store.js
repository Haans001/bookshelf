import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { loadUser } from './actions/authAction';

const middlware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlware))
);

class Store extends React.Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    const { children } = this.props;
    return <Provider store={store}>{children}</Provider>;
  }
}

export default Store;
