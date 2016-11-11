import * as ActionTypes from '../constants/ActionTypes';

export const fetchDecksAction = (decks) => (dispatch, getState) => {
  dispatch({
    type: ActionTypes.FETCH_DECKS_SUCCESS,
    response: decks.data
  });
};

export const saveDeckAction = (deck) => (dispatch) => {
  dispatch({
    type: ActionTypes.SAVED_DECK_SUCCESS,
    response: deck.data
  });
};
