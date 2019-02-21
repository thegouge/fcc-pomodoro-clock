import {createStore} from "redux";
import rootReducer from "./reducers/root";

const initialState = {
  sessionMinutes: 25,
  breakMinutes: 5,
  timeLeft: 1500,
  timerID: "",
  breakTime: false,
  counting: false
};

// un-comment this to add middleware
// const middleware = [];

export default createStore(rootReducer, initialState);
