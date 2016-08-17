import 'tether';
import React from 'react';
import { render } from 'react-dom';
import Root from './components/root/index.js';
import configureStore from './configureStore';
require('../styles/_all.scss');
// activeClassName="active"
const store = configureStore();
render(
  <Root store={store} />,
  document.getElementById('app')
);
