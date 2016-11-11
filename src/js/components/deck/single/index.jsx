import React, { PropTypes } from 'react';

const DeckView = (props) => (
  <div className="deck-view clearfix">
    <h1>JavaScript deck: {props.params.deckId}</h1>
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

DeckView.propTypes = {
  params: PropTypes.any.isRequired
};

export default DeckView;
