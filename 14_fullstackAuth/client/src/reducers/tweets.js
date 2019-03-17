import { FETCH_TWEETS } from '../actions/tweets';

const initialState = [];

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_TWEETS:
      return payload;
    default:
      return state;
  }
}
