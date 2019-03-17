import { createAction } from 'promise-middleware-redux';
import { getTweets } from '../services/tweetsApi';

export const [
  fetchTweets,
  FETCH_TWEETS,
  FETCH_TWEETS_LOADING,
  FETCH_TWEETS_FULFILLED,
  FETCH_TWEETS_ERROR
] = createAction('FETCH_TWEETS', getTweets);
