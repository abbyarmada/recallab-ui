import React from 'react';
import Header from '../header/index.jsx';
import Sidebar from '../sidebar/index.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
      </div>
    );
  }
}

export default App;
