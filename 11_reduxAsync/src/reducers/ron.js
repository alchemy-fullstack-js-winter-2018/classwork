import { FETCH_FACTS, FETCH_FACTS_LOADING } from '../actions/ron';

const initialState = {
  facts: [],
  loading: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_FACTS:
      return { ...state, facts: payload, loading: false };
    case FETCH_FACTS_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
