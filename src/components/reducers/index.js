import { combineReducers } from 'redux'
import inwords from "./words";
import counter from "./counter";

export default combineReducers({
  inwords,
  counter,
});
