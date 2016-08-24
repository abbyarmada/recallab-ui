import React, { Component, PropTypes } from 'react';

export default class Login extends Component {
  handleClick(event) {
    this.props.onLoginClick();
  }
  render() {
    return (
      <div>
        <button onClick={(event) => this.handleClick(event)} className="btn btn-primary">
          Login
        </button>

      </div>
    );
  }
}

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
};
