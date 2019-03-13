import { FETCH_TWEETS } from '../actions/tweets';

const initialState = {
  tweets: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_TWEETS:
      return { ...state, tweets: action.payload };
    default:
      return state;
  }
}
