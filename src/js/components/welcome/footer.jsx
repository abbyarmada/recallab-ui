import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className="welcome-footer">
        {this.props.children}
      </div>
    );
  }
}

export default Footer;
