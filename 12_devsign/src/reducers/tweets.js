import { FETCH_TWEETS, FETCH_TWEETS_PENDING, FETCH_TWEETS_REJECTED } from '../actions/tweets';

const initialState = {
  tweets: [],
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_TWEETS:
      return { ...state, tweets: action.payload, loading: false };
    case FETCH_TWEETS_PENDING:
      return { ...state, loading: true };
    case FETCH_TWEETS_REJECTED:
      return { ...state, tweets: [], loading: false, error: action.payload };
    default:
      return state;
  }
}
