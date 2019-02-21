import {START_COUNTDOWN, END_COUNTDOWN, TICK} from "./types";

export function startCountdown() {
  return {type: START_COUNTDOWN};
}

export function endCountdown() {
  return {type: END_COUNTDOWN};
}

export function tick() {
  return {type: TICK};
}
