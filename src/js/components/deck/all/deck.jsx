import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Deck = ({ id,  name }) => (
  <li>
    <Link to={`/deck/${id}`}>{name}</Link> |<Link to={`/deck/edit/${id}`}>Edit</Link>
  </li>
);

Deck.propTypes = {
  name: PropTypes.string.isRequired
};



export default Deck;
