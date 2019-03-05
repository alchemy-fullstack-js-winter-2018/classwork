import { FETCH_FACTS } from '../actions/ron';

const initialState = {
  facts: []
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_FACTS:
      return { ...state, facts: payload };
    default:
      return state;
  }
}
