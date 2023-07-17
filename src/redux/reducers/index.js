import authReducer from "./authReducer";
import counterReducer from "./counterReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  auth: authReducer
});

export default allReducers;
