import axios from 'axios';
import { fetchDecksAction } from '../actions/index';

export const fetchDecks = () => (
  axios.get('/decks/all')
    .then(function(response) {
      fetchDecksAction(response);
    })
    .catch(function(response) {
      console.log(response);
    })
);
