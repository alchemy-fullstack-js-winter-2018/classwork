import dictionary from '../fixtures/words.json';
import { UPDATE_SEARCH_TERM, UPDATE_COLOR } from '../actions/words.js';

const initialState = {
  dictionary,
  searchTerm: 'x',
  color: ''
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    case UPDATE_COLOR:
      return { ...state, color: action.payload };
    default:
      return state;
  }
}
