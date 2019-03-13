import { FETCH_TWEETS, FETCH_TWEETS_PENDING } from '../actions/tweets';

const initialState = {
  tweets: [],
  loading: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_TWEETS:
      return { ...state, tweets: action.payload, loading: false };
    case FETCH_TWEETS_PENDING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
