import React, { Component, PropTypes } from 'react';
import { login, logoutUser, lockSuccess } from '../../actions/auth';
import Login from '../auth/Login.jsx';
import Logout from '../auth/Logout.jsx';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import queryString from 'query-string';
import axios from 'axios';
import config from '../../config';
import Footer from './footer.jsx';

class Welcome extends React.Component {
  componentWillMount() {
    if (localStorage.getItem('id_token')) {
      this.context.router.push('/home');
    }
    const { dispatch } = this.props;
    if (location.hash) {
      const parsed = queryString.parse(location.hash);
      dispatch(lockSuccess(parsed.access_token, parsed.id_token, parsed.token_type));
      this.context.router.push('/home');
      axios.defaults.baseURL = config.api_url;
      axios.defaults.headers.common['Authorization'] = `Bearer ${parsed.id_token}`;
    }
  }

  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <div id="wrapper">
          <div>
            <Login
              onLoginClick={() => dispatch(login())}
            />
          </div>
          <div className="cover">
            <div className="message">Knowledge is power.</div>
            <Footer>
              <Link to="/about">About</Link>
            </Footer>
          </div>
          <div className="gradient"></div>
        </div>
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
