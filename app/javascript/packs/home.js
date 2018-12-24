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
import 'styles/index.css';
import 'styles/map.css';
import 'styles/navbar.css';
import 'styles/vacation-modal.css';
import 'styles/modal.css';
import sampleData from '../sampleData';

document.addEventListener('DOMContentLoaded', () => {
  render(<App mapData={sampleData} />, document.getElementById('root'));
});
