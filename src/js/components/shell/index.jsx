import React from 'react';
import Header from '../header/index.jsx';
import Sidebar from '../sidebar/index.jsx';

class Shell extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        {this.props.children}
      </div>
    );
  }
}

export default Shell;
