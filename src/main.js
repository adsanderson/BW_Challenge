import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';

require("./tag-cloud.css");

// Polyfillers for earlier versions of ie
require('es6-promise').polyfill();	
require('es6-object-assign').polyfill();

let store = configureStore();

let rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);