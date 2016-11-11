import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import { syncHistoryWithStore, routerActions } from 'react-router-redux';
import Card from '../card/index.jsx';
import Decks from '../deck/all/index.jsx';
import DeckEdit from '../deck/single/edit.jsx';
import DeckView from '../deck/single/index.jsx';
import App from '../app/index.jsx';
import Welcome from '../welcome/index.jsx';

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: (state) => state.user, // how to get the user state
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticated', // a nice name for this auth check
  failureRedirectPath: '/',
  allowRedirectBack: false,
  predicate: (user) => user.idToken
});

const Authenticated = UserIsAuthenticated((props) => props.children);

const Root = (props) => (
  <Provider store={props.store}>
    <Router history={syncHistoryWithStore(browserHistory, props.store)}>
      <Route path="/" component={Welcome} />
      <Route component={Authenticated}>
        <Route path="/home" component={App}>
          {/* add the routes here */}
          <Route path="/deck" component={Decks} />
          <Route path="/deck/view/:deckId" component={DeckView} />
          <Route path="/deck/new" component={DeckEdit} />
          <Route path="/deck/edit/:deckId" component={DeckEdit} />
          <Route path="/card/:id" component={Card} />
        </Route>
      </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
