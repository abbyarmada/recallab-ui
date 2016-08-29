import * as ActionTypes from '../constants/ActionTypes';
import { fetchDecks } from '../api/index';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
  LOCK_SUCCESS, LOGOUT_SUCCESS
} from '../actions/auth.js';

const fetchedDecks = (state, action) => {
  return Object.assign({}, state, {
    ...action.response
  });
};

function user(state = {
  isAuthenticated: localStorage.getItem('id_token') ? true : false,
  idToken: localStorage.getItem('id_token'),
  tokenType: localStorage.getItem('tokenType')
}, action) {
  switch (action.type) {
    case LOCK_SUCCESS: {
      localStorage.setItem('id_token', action.idToken);
      localStorage.setItem('tokenType', action.tokenType);
      return Object.assign({}, state, {
        accessToken: action.accessToken,
        idToken: action.idToken,
        tokenType: action.tokenType,
        isAuthenticated: true
      });
    }
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false
      })

    default:
      return state;
  }
}
function decks(state = [], action) {
  switch (action.type) {
    case ActionTypes.FETCH_DECKS_SUCCESS:
      return fetchedDecks(state, action);

    default:
      return state;
  }
}

const recallab = combineReducers({
  user,
  decks,
  routing: routerReducer,
});

export default recallab;

export const getDecks = (state) => state.decks;
