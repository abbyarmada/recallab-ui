import React from 'react';


class DeckEdit extends React.Component {
  render() {
    return (
      <div className="deck-edit clearfix">
        <form action="">
          <label htmlFor="deck-name" placehodler="Deck name">
            Deck name:
            <input type="" id="deck-name" />
          </label>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default DeckEdit;
