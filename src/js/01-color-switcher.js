import { ChangeRandomColor } from './function-01/changeRandomColor.js';
import { updateBodyBg } from './function-01/updateBodyBg.js';

const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

const DELAY = 1000;

const changeColor = new ChangeRandomColor({
  changeColor: updateBodyBg,
});

refs.startBtn.addEventListener(
  'click',
  changeColor.start.bind(changeColor, DELAY)
);
refs.stopBtn.addEventListener('click', changeColor.stop.bind(changeColor));
