import React from 'react';


class ContentWrapper extends React.Component {
  render() {
    return (
      <div id="content-wrapper" className="clearfix">
        {this.props.children}
      </div>
    );
  }
}

export default ContentWrapper;
