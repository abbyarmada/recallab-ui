import React from 'react';

const Footer = (props) => (
  <div className="welcome-footer">
    {props.children}
  </div>
);

Footer.propTypes = {
  children: React.PropTypes.node
};

export default Footer;
