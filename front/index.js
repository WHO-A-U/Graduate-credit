import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import rootReducer from './src/modules';

import App from './App.js';

const store = createStore(rootReducer);

const Hot = hot(
  <Provider store={store}>
    <App></App>
  </Provider>
);

ReactDom.render(<Hot />, document.querySelector('#root'));
