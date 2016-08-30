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
        <div className="menu">
          <div className="item">
            <Link to="/deck"><i className="fa fa-th-large" aria-hidden="true"></i></Link>
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
            <i className="fa fa-sign-out" aria-hidden="true"></i></a>
        </div>
      </div>
    );
  }
}


Sidebar.contextTypes = {
  router: React.PropTypes.object
};

export default Sidebar;
