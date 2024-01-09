import { combineReducers } from "redux";
import { createStore } from "redux";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);
