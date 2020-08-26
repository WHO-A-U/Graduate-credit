import React from 'react';
import { Menu, Button } from 'antd';
import { createStore, applyMiddleware } from 'redux';
import AppLayout from './src/components/AppLayout';
import rootReducer from './src/modules';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
const logger = createLogger();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, ReduxThunk))
);
const App = ({ Component }) => {
  return (
    <>
      <Provider store={store}>
        <AppLayout></AppLayout>
      </Provider>
    </>
  );
};
export default App;
