import songsListReducer from "./reducers/songsListReducer";
import songReducers from "./reducers/songReducers";
import { combineReducers } from "redux";
import { createStore } from "redux";

const rootReducer = combineReducers({
  selectedSong: songReducers,
  songsListReducer: songsListReducer,
});

const store = createStore(rootReducer);
export default store;
