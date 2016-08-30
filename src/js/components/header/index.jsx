import React from 'react';
import UserBadge from '../profile/badge/index.jsx';
import { Link } from 'react-router';

class Header extends React.Component {
  render() {
    return (
      <div id="header" className="clearfix">
        <Link to="/home"><div id="header-logo"></div></Link>
        <div className="header-separator"></div>
      </div>
    );
  }
}

export default Header;
