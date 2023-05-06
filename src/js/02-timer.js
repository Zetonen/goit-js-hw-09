import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import '../css/timer-style.css';
import { refs } from './function-02/refs.js';
import { Timer } from './function-02/timer.js';
import { timeCheck } from './function-02/timeCheck.js';
import { populateTimer } from './function-02/populateTimer.js';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const date = new Date(selectedDates[0]);
    timeCheck(date.getTime())
      .then(date => {
        timer.changeTimeLeft(date);
        refs.startBtn.removeAttribute('disabled');
      })
      .catch(() => {
        alert('Please choose a date in the future');
        refs.startBtn.setAttribute('disabled', true);
      });
  },
};

const timer = new Timer({
  onTick: populateTimer,
});

refs.startBtn.addEventListener('click', timer.start.bind(timer));

flatpickr(refs.selectedDates, options);

// function timeCheck(date) {
//   if (Date.now() >= date) {
//     refs.startBtn.setAttribute('disabled', true);
//     alert('Please choose a date in the future');
//     return;
//   }
//   refs.startBtn.removeAttribute('disabled');
//   timer.changeTimeLeft(date - Date.now());
//   console.log(date - Date.now())
// }
