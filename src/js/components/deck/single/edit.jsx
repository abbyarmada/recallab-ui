import React from 'react';
import * as api from '../../../api/index';

let deck = {
  deckName: ""
};

function updateField(e) {
  deck[e.target.name] = e.target.value;
  e.preventDefault();
  return false;
}

function Submit(e) {
  deck = Object.assign({}, deck, { name: deck.deckName });
  api.saveDeck(deck);
  e.preventDefault();
  return false;
}

class DeckEdit extends React.Component {

  render() {

    return (
      <div className="deck-edit clearfix">
        <form >
          <label htmlFor="deckName" >
            Deck name:
            <input type="text" name="deckName" value={deck.name} onChange={updateField} />
          </label>
          <div className="button" onClick={Submit}>Submit</div>
        </form>
      </div>
    );
  }
}

export default DeckEdit;
