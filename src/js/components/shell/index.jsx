import React from 'react';
import Header from '../header/index.jsx';
import Sidebar from '../sidebar/index.jsx';

const Shell = (props) => (
  <div>
    <Sidebar />
    <Header />
    {props.children}
  </div>
);

Shell.propTypes = {
  children: React.PropTypes.node
};

export default Shell;
