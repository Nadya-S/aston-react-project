import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { movieReducer } from "./movieReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

export const store = createStore(
  movieReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
