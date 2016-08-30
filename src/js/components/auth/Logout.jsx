import React, { Component, PropTypes } from 'react';
import { logoutUser } from '../../actions/auth.js';

export default class Logout extends Component {

  render() {
    const { onLogoutClick } = this.props;

    return (
      <button onClick={() => logoutUser()} className="btn btn-primary">
        Logout
      </button>
    );
  }
}

Logout.propTypes = {
  onLogoutClick: PropTypes.func.isRequired
};
