import {combineReducers, createStore} from "redux";
import appointmentReducer from "./appointmentReducer";

let reducers = combineReducers({
  listOfRecords: appointmentReducer,
});

let store = createStore(reducers);

 

export default store;