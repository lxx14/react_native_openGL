import React from 'react';
import { AppContainer } from './src/Routing';
import { Provider } from 'react-redux';

import { createStore } from 'redux';

import rootReducer from './src/redux/RootReducer';

const store = createStore(
  rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__()
)

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
