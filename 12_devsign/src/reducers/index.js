import { combineReducers } from 'redux';
import session from './session';
import tweets from './tweets';

export default combineReducers({
  session,
  tweets
});
