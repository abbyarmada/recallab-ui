import { normalize } from 'normalizr';
import * as schema from './schema';
import * as api from '../api';
import * as ActionTypes from '../constants/ActionTypes';

export const fetchDecks = () => (dispatch) =>
  dispatch({
    type: ActionTypes.FETCH_DECKS_SUCCESS,
    response: api.fetchDecks()
  });
