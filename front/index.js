import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import App from './App.js';

// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './src/modules';
// import ReduxThunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { createLogger } from 'redux-logger';
// const logger = createLogger();
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(logger, ReduxThunk))
// );

const Hot = hot(App);
ReactDom.render(<Hot />, document.querySelector('#root'));

// ReactDom.render(
//   <Provider store={store}>
//     <App></App>
//   </Provider>,
//   document.querySelector('#root')
// );
