import { createPromise } from './createPromise.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function onSubmitForm(e) {
  e.preventDefault();
  const data = {};
  const formData = new FormData(e.currentTarget);

  formData.forEach((value, name) => {
    data[name] = Number(value);
  });

  for (let i = 1; i <= data.amount; i++) {
    createPromise(i, data.delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    data.delay += data.step;
  }
}
