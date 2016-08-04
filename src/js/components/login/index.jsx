import React from 'react';


class Login extends React.Component {
  render() {
    return (
      <div id="login-box" className="clearfix">
        <form action="">
          <label htmlFor="username">
            Username:
            <input type="text" />
          </label>
          <label htmlFor="">
            Password:
            <input type="password" />
          </label>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Login;
