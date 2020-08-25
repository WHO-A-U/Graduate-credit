import { combineReducers } from 'redux';
import InfoContent from './InfoContent';
import MyHistory from './MyHistory';

const rootReducer = combineReducers({
  InfoContent,
  MyHistory,
});

export default rootReducer;
