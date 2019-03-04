import dictionary from '../fixtures/words.json';
import { UPDATE_SEARCH_TERM } from '../actions/words.js';

const initialState = {
  dictionary,
  searchTerm: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
}
