import React, { PropTypes } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import queryString from 'query-string';
import config from '../../config';
import { login, lockSuccess } from '../../actions/auth';
import Login from '../auth/Login.jsx';
import Footer from './footer.jsx';
import * as api from '../../api/index';

class Welcome extends React.Component {
  componentWillMount() {
    axios.defaults.baseURL = config.api_url;

    if (localStorage.getItem('id_token')) {
      axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('id_token')}`;
      api.ping();
      this.context.router.push('/home');
    }
    const { dispatch } = this.props;
    if (location.hash) {
      const parsed = queryString.parse(location.hash);
      dispatch(lockSuccess(parsed.access_token, parsed.id_token, parsed.token_type));
      axios.defaults.headers.common.Authorization = `Bearer ${parsed.id_token}`;
      api.ping();
      this.context.router.push('/home');
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
          <div className="gradient" />
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
