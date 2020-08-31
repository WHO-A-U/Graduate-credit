import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';
import App from './App.js';

const Hot = hot(App);
ReactDom.render(<Hot />, document.querySelector('#root'));
