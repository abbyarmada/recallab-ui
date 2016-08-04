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
import App from '../app/index.jsx';

class Routes extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          {/* add the routes here */}
          <Route path="/deck" component={Decks}>
            <Route path="/deck/:deckId" component={DeckView} />
          </Route>
        </Route>
      </Router>
    );
  }
}

export default Routes;


