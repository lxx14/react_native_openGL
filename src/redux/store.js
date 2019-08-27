import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from '../redux/RootReducer';
import { composeWithDevTools } from 'remote-redux-devtools';

const middleware = this.__DEV__ ? [thunk, logger] : [thunk];

const store = createStore(rootReducer, compose(composeWithDevTools(applyMiddleware(...middleware))));

export default store;
