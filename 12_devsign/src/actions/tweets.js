import { createAction } from 'promise-middleware-redux';
import { getTweets } from '../services/tweets';

// export const FETCH_TWEETS = 'FETCH_TWEETS';
// export const FETCH_TWEETS_PENDING = 'FETCH_TWEETS_PENDING';
// export const fetchTweets = () => ({
//   type: FETCH_TWEETS,
//   pendingType: FETCH_TWEETS_PENDING,
//   payload: getTweets
// });

export const [
  fetchTweets,
  FETCH_TWEETS,
  FETCH_TWEETS_PENDING,
  FETCH_TWEETS_FULFILLED,
  FETCH_TWEETS_REJECTED
] = createAction('FETCH_TWEETS', getTweets);
