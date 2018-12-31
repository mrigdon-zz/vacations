/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'home' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import React from 'react';
import { render } from 'react-dom';
import App from 'components/App';
import { createStore } from 'redux';
import rootReducer from 'reducers';
import reduxBrowser from 'lib/reduxBrowser';
import { Provider } from 'react-redux';
import 'styles/index.scss';
import 'styles/map.css';
import 'styles/navbar.css';
import 'styles/modal.css';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const vacations = JSON.parse(root.dataset.vacations);
  const store = createStore(rootReducer, { vacations }, reduxBrowser());
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  );
});
