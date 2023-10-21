import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { movieReducer } from "./movieReducer";

export const store = createStore(movieReducer, applyMiddleware(thunk));
