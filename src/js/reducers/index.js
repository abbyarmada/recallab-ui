/**
 * Generate new game state with new random secret code
 *
 * @param  {object} config
 *
 * @return {object}
 */
const getNewStore = (config) => ({
  user: {},
  decks: []
});

export default function recallab(state = getNewStore({}), action) {
  switch (action.type) {
    case 'LOAD_STORE':
      return getNewStore();

    default:
      return state;
  }
}
