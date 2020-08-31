import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import AppLayout from './src/components/AppLayout';
import rootReducer from './src/modules';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);
const App = () => {
  return (
    <>
      <Provider store={store}>
        <AppLayout></AppLayout>
      </Provider>
    </>
  );
};
export default App;
