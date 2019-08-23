import React from 'react';
import { AppContainer } from './src/Routing';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger'
import { composeWithDevTools } from 'remote-redux-devtools';
import rootReducer from './src/redux/RootReducer';

const middleware = this.DEV ? [thunk, logger] : [thunk];

const store = createStore(
  rootReducer,
  compose(composeWithDevTools(applyMiddleware(...middleware))));

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
