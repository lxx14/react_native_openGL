import React from 'react';
import { AppContainer } from './Routing';
import { Provider } from 'react-redux';

import  store  from './redux/store';

const App = () => {

  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
