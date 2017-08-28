import { combineReducers } from 'redux'
import inbox from "./inbox";
import words from "./words";
import counter from "./counter";
import weather from "./weather";

export default combineReducers({
  inbox,
  words,
  counter,
  weather,
});
