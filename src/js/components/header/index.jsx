import React from 'react';
import UserBadge from '../profile/badge/index.jsx';

class Header extends React.Component {
  render() {
    return (
      <div id="header" className="clearfix">
        <div id="header-logo"></div>
        <div className="header-separator"></div>
      </div>
    );
  }
}

export default Header;
