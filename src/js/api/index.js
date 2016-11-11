import axios from 'axios';
import { fetchDecksAction, saveDeckAction } from '../actions/index';

export const fetchDecks = () => (dispatch, getState) => {
  axios.get('/decks/all')
    .then((response) => {
      dispatch(fetchDecksAction(response));
    })
    .catch((response) => {

    });
};

export const saveDeck = (deck) => (
  axios.post('/decks/create', deck)
    .then((response) => {
      saveDeckAction(response);
    })
    .catch((response) => {

    })
);

export const ping = () => (
  axios.get('/ping')
    .then((response) => {

    })
    .catch((response) => {

    })
);
