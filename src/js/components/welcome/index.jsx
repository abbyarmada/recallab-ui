import React, { Component, PropTypes } from 'react';
import { login, logoutUser, lockSuccess } from '../../actions/auth';
import Login from '../auth/Login.jsx';
import Logout from '../auth/Logout.jsx';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import queryString from 'query-string';

class Welcome extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    if (location.hash) {
      const parsed = queryString.parse(location.hash);
      dispatch(lockSuccess(parsed.access_token, parsed.id_token, parsed.token_type));
      this.context.router.push('/');
    }
  }

  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <Login
          onLoginClick={() => dispatch(login())}
        />
        <Link to="/deck">Decks</Link>
      </div>
    );
  }
}

Welcome.propTypes = {
  dispatch: PropTypes.func.isRequired
};

Welcome.contextTypes = {
  router: React.PropTypes.object
};

Welcome = withRouter(connect()(Welcome));

export default Welcome;
