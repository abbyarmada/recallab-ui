import * as ActionTypes from '../constants/ActionTypes';
import { fetchDecks } from '../api/index';

const getNewStore = (config) => ({
  user: {},
  decks: []
});

const fetchedDecks = (state, action) => {
  return Object.assign({}, state, {
    decks: action.response
  });
};

export default function recallab(state = getNewStore({}), action) {
  switch (action.type) {
    case ActionTypes.LOAD_STORE:
      return getNewStore();
    case ActionTypes.FETCH_DECKS_SUCCESS:
      return fetchedDecks(state, action);

    default:
      return state;
  }
}



export const getDecks = (state) => fetchDecks();
