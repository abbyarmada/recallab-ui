import React from 'react';

const ContentWrapper =(props) => (
  <div id="content-wrapper" className="clearfix">
    {props.children}
  </div>
);

ContentWrapper.propTypes = {
  children: React.PropTypes.node
};

export default ContentWrapper;
