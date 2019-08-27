import React from 'react';
import { AppContainer } from './src/Routing';
import { Provider } from 'react-redux';

import { store } from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
