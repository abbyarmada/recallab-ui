import axios from 'axios';
import { fetchDecksAction } from '../actions/index';

export const fetchDecks = () => (
  axios.get('/decks/all')
    .then((response) => {
      fetchDecksAction(response);
    })
    .catch((response) => {

    })
);
