import { refs } from "./refs.js";
export function populateTimer({ days, hours, minutes, seconds }) {
    refs.daysIndicator.textContent = days;
    refs.hoursIndicator.textContent = hours;
    refs.minutesIndicator.textContent = minutes;
    refs.secondsIndicator.textContent = seconds;
  }