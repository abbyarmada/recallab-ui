import React from 'react';


class DeckView extends React.Component {
  render() {
    return (
      <div className="deck-view clearfix">
        <h1>JavaScript deck: {this.props.params.deckId}</h1>
        <hr />
        <ul>
          <li>Question | Answer - Delete</li>
          <li>Question | Answer - Delete</li>
          <li>Question | Answer - Delete</li>
          <li>Question | Answer - Delete</li>
          <li>Question | Answer - Delete</li>
          <li>Question | Answer - Delete</li>
          <li>Question | Answer - Delete</li>
          <li>Question | Answer - Delete</li>
          <li>Question | Answer - Delete</li>
          <li>Question | Answer - Delete</li>
        </ul>
      </div>
    );
  }
}

export default DeckView;
