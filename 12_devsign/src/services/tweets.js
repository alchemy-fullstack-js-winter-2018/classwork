import { get, post } from './request';

export const createTweet = tweet => post('/tweets', tweet);
export const getTweets = () => get('/tweets');
