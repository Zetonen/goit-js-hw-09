import { createPromise } from "./createPromise.js";

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
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        });
      data.delay += data.step;
    }
  }