import React from 'react';
import ContentWrapper from '../content-wrapper/index.jsx';
import Shell from '../shell/index.jsx';

const App  = (props) => (
  <Shell>
    <ContentWrapper>
      { props.children }
    </ContentWrapper>
  </Shell>
);

App.propTypes = {
  children: React.PropTypes.node
};

export default App;
