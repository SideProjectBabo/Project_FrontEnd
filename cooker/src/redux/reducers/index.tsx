import counter from "./counterReducer";
import auth from "./authReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter,
});
export default allReducers;