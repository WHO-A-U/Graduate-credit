import { combineReducers } from 'redux';
import infoContent from './infoContent';
import myHistory from './myHistory';

const rootReducer = combineReducers({
  infoContent,
  // myHistory,
});

export default rootReducer;
