import { Link } from 'react-router';
import React, { PropTypes } from 'react';

const Sidebar = () => (
  <div id="sidebar" className="clearfix">
    <Link to="/home"><div id="header-logo" /></Link>
    <hr />
    <div className="menu">
      <div className="item">
        <Link to="/deck"><i className="fa fa-th-large" aria-hidden="true" />
          Decks
        </Link>
      </div>
    </div>
    <div className="logout">
      <a
        onClick={() => {
          localStorage.removeItem('id_token');
          localStorage.removeItem('tokenType');
          this.context.router.push('/');
        }}
      >
        <i className="fa fa-sign-out" aria-hidden="true" />
        Sign out
      </a>
    </div>
  </div>
);

Sidebar.contextTypes = {
  router: PropTypes.object,
};

export default Sidebar;
