import React from 'react';
import Header from '../header/index.jsx';
import Sidebar from '../sidebar/index.jsx';
import Card from '../card/index.jsx';
import CardControlls from '../card/controlls.jsx';
import Decks from '../deck/all/index.jsx';
import ContentWrapper from '../content-wrapper/index.jsx';
import DeckEdit from '../deck/single/edit.jsx';
import DeckView from '../deck/single/index.jsx';
import CardEdit from '../card/edit.jsx';
import Login from '../login/index.jsx';
import { Router, Route, hashHistory } from 'react-router';
import Shell from '../shell/index.jsx';

class App extends React.Component {
  render() {
    return (
      <Shell>
        <ContentWrapper>
          {this.props.children}
        </ContentWrapper>
      </Shell>
    );
  }
}

export default App;
