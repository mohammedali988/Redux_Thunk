import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import items from "./Item/reducer";

const reducers = combineReducers({
  items: items,
});

export const store = createStore(reducers, applyMiddleware(thunk));
