import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import { getDecks } from '../../../reducers/index.js';
import Deck from './deck.jsx';
import * as api from '../../../api/index.js';

class Decks extends React.Component {
  componentDidMount(dispatch) {
    this.fetchData();
  }

  fetchData() {
    this.props.dispatch(api.fetchDecks());
  }

  render() {
    return (
      <div className="decks clearfix">
        <Link to="/deck/new"><button className="button ">New Deck</button></Link>
        <h1>Your decks:</h1>
        <ul>
        {this.props.decks.map(deck => {
          return <Deck
            key = {deck.id}
            {...deck}
          />
          }
        )}
        </ul>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  decks: getDecks(state)
});

Decks.propTypes = {
  decks: PropTypes.array.isRequired,
  children: PropTypes.node,
};


Decks = withRouter(connect(
  mapStateToProps
)(Decks));

export default Decks;
