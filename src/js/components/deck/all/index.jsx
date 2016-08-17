import React, { PropTypes } from 'react';
import Shell from '../../shell/index.jsx';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ContentWrapper from '../../content-wrapper/index.jsx';
import { Link } from 'react-router';


class Decks extends React.Component {
  render() {
    return (
      <div className="decks clearfix">
        <h1>Your decks:</h1>
        <ul>
          <li><Link to="/deck/1">Deck 1</Link> |<Link to="/deck/edit/1">Edit</Link></li>
          <li><Link to="/deck/edit/2">Deck 2</Link></li>
          <li><a href="/deck/3">Deck 3</a></li>
          <li><a href="/deck/4">Deck 4</a></li>
          <li><a href="/deck/5">Deck 5</a></li>
          <li><a href="/deck/6">Deck 6</a></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

Decks.propTypes = {
  decks: PropTypes.array.isRequired,
  children: PropTypes.node
};



export default Decks;
