import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import configureAppStore from './store/configureAppStore';

const rootElement = document.getElementById('react-app');
const store = configureAppStore();

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  rootElement);