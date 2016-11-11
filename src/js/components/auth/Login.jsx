import React, { Component, PropTypes } from 'react';

export default class Login extends Component {
  handleClick(event) {
    this.props.onLoginClick();
  }
  render() {
    return (
      <div className="login-button">
        <button onClick={(event) => this.handleClick(event)} className="button button-borderless">
          <i className="fa fa-sign-in" /> Sign In
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired
};
