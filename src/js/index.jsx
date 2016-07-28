import 'tether';
import React from 'react';
import { render } from 'react-dom';
import App from './components/app/index.jsx';
require('../styles/_all.scss');

render(<App />, document.getElementById('app'));
