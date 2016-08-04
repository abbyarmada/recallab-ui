import 'tether';
import React from 'react';
import { render } from 'react-dom';
import App from './components/app/index.jsx';
import Routes from './components/router/index.jsx';
require('../styles/_all.scss');
// activeClassName="active"
render(<Routes />, document.getElementById('app'));
