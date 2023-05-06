export function timeCheck(date) {
    return new Promise((resolve, rejected) => {
      if (Date.now() < date) {
        resolve(date - Date.now());
      }
      rejected();
    });
  }