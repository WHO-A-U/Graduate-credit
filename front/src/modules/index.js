import { combineReducers } from "redux";
import infoContent from "./InfoContent";
import myHistory from "./MyHistory";

const rootReducer = combineReducers({
  infoContent,
  myHistory,
});

export default rootReducer;
