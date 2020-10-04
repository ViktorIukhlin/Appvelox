import {combineReducers, createStore} from "redux";

let reducers = combineReducers({
});

let store = createStore(reducers);

window.store = store;

export default store;