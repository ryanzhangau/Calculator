import { createStore, combineReducers, applyMiddleware } from "redux";
import calcReducer from "./calcReducer";
import logger from "redux-logger";

const store = createStore(
  combineReducers({
    calcReducer
    // more reducers will be here if needed
  }),
  {},
  applyMiddleware(logger)
);
export default store;
