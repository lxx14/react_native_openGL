import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { composeWithDevTools } from 'remote-redux-devtools';

import rootReducer from './RootReducer';

const middleware = this.DEV ? [thunk, logger] : [thunk];
export const store = createStore(
    rootReducer,
    compose(composeWithDevTools(applyMiddleware(...middleware)))
);