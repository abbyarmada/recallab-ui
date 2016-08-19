import * as ActionTypes from '../constants/ActionTypes';

const getNewStore = (config) => ({
  user: {},
  decks: []
});

export default function recallab(state = getNewStore({}), action) {
  switch (action.type) {
    case ActionTypes.LOAD_STORE:
      return getNewStore();

    default:
      return state;
  }
}
