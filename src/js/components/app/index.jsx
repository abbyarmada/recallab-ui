import React from 'react';
import ContentWrapper from '../content-wrapper/index.jsx';
import Shell from '../shell/index.jsx';

class App extends React.Component {
  render() {
    return (
      <Shell>
        <ContentWrapper>
          {this.props.children}
        </ContentWrapper>
      </Shell>
    );
  }
}

export default App;
