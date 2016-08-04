import React from 'react';


class CardEdit extends React.Component {
  render() {
    return (
      <div className="card-edit clearfix">
        <form action="">
          <input type="text" placeholder="question" />
          <input type="text" placeholder="answer" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default CardEdit;
