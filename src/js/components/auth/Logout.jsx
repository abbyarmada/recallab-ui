import React from 'react';
import { logoutUser } from '../../actions/auth.js';

const Logout = () => (
  <button onClick={() => logoutUser()} className="btn btn-primary">
    Logout
  </button>
);

export default Logout;
