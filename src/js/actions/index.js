import { normalize } from 'normalizr';
import * as schema from './schema';
import * as ActionTypes from '../constants/ActionTypes';

export const fetchDecksAction = (decks) => (dispatch) => {
  dispatch({
    type: ActionTypes.FETCH_DECKS_SUCCESS,
    response: decks
  });
};
