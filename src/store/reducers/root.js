import {
  START_COUNTDOWN,
  END_COUNTDOWN,
  TICK,
  START_BREAK,
  END_BREAK,
  INCREMENT_SESSION,
  DECREMENT_SESSION,
  INCREMENT_BREAK,
  DECREMENT_BREAK
} from "../actions/types";
import {tick} from "../actions/timeActions";

const initialState = {
  sessionMinutes: 25,
  breakMinutes: 5,
  timeLeft: 1500,
  timerID: "",
  breakTime: false,
  counting: false
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case START_COUNTDOWN:
      return Object.assign({}, state, {
        timerID: setInterval(tick, 1000),
        counting: true
      });

    case END_COUNTDOWN:
      clearInterval(state.timerID);
      return Object.assign({}, state, {
        timerID: "",
        counting: false
      });

    case TICK:
      return state;

    case INCREMENT_SESSION:
      return state;

    case DECREMENT_SESSION:
      return state;

    case INCREMENT_BREAK:
      return state;

    case DECREMENT_BREAK:
      return state;

    case START_BREAK:
      return state;

    case END_BREAK:
      return state;

    default:
      return state;
  }
}

// export default combineReducers({
//   time: timeReducer
// });
