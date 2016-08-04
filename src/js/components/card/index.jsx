import React from 'react';
import CardQuestion from './question.jsx';
import CardAnswer from './answer.jsx';

class Card extends React.Component {
  render() {
    return (
      <div className="card clearfix">
        <CardQuestion />
        <CardAnswer />
      </div>
    );
  }
}

export default Card;
