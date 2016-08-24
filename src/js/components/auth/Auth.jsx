import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';

class Auth extends React.Component {
  render() {
    return (
      <div>
      {this.props.params.map(param =>
        <div>{param}</div>
      )}
      </div>
    );
  }
}

Auth = withRouter(Auth);

export default Auth;
