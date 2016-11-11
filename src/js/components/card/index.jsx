import React from 'react';
import CardQuestion from './question.jsx';
import CardAnswer from './answer.jsx';

const Card = () => (
  <div className="card clearfix">
    <CardQuestion />
    <CardAnswer />
  </div>
);

export default Card;
