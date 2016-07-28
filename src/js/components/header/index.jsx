import React from 'react';
import UserBadge from '../profile/badge/index.jsx';

class Header extends React.Component {
  render() {
    return (
      <div id="header" className="clearfix">
        <UserBadge />
      </div>
    );
  }
}

export default Header;
