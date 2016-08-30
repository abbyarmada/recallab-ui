import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { dispatch } from 'redux';
import { logoutUser } from '../../actions/auth.js';

class Sidebar extends React.Component {
  render() {
    const { onLogoutClick } = this.props;

    return (
      <div id="sidebar" className="clearfix">
        <Link to="/home"><div id="header-logo"></div></Link>
        <hr />
        <div className="menu">
          <div className="item">
            <Link to="/deck"><i className="fa fa-th-large" aria-hidden="true"></i>
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
            <i className="fa fa-sign-out" aria-hidden="true"></i>Sign out</a>
        </div>
      </div>
    );
  }
}


Sidebar.contextTypes = {
  router: React.PropTypes.object
};

export default Sidebar;
