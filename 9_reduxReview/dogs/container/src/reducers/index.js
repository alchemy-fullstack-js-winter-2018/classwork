import { combineReducers } from 'redux';
import dogs from './dogs';
import dogCreate from './dogCreate';

export default combineReducers({
  dogs,
  dogCreate
});
