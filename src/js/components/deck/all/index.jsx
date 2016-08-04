import React from 'react';
import Shell from '../../shell/index.jsx';
import ContentWrapper from '../../content-wrapper/index.jsx';

class Decks extends React.Component {
  render() {
    return (
      <div className="decks clearfix">
        <h1>Your decks:</h1>
        <ul>
          <li><a href="#">Deck 1</a></li>
          <li><a href="#">Deck 2</a></li>
          <li><a href="#">Deck 3</a></li>
          <li><a href="#">Deck 4</a></li>
          <li><a href="#">Deck 5</a></li>
          <li><a href="#">Deck 6</a></li>
        </ul>
      </div>
    );
  }
}

export default Decks;
