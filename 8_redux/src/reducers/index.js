import { combineReducers } from 'redux';
import pizza from './pizza';
import dogs from './dogs';

export default combineReducers({
  pizza,
  dogs
});
