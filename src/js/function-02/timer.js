export class Timer {
  constructor({ onTick }) {
    this.timeLeft = 0;
    this.idInterval = null;
    this.isActive = false;
    this.onTick = onTick;
  }

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.idInterval = setInterval(() => {
      this.onTick(this.convertMs(this.timeLeft));
      this.timeLeft -= 1000;
      if (this.timeLeft <= 0) {
        this.stop();
      }
    }, 1000);
  }

  stop() {
    this.isActive = false;
    clearInterval(this.idInterval);
  }

  convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = this.pad(String(Math.floor(ms / day)));
    const hours = this.pad(String(Math.floor((ms % day) / hour)));
    const minutes = this.pad(String(Math.floor(((ms % day) % hour) / minute)));
    const seconds = this.pad(
      String(Math.floor((((ms % day) % hour) % minute) / second))
    );

    return { days, hours, minutes, seconds };
  }

  changeTimeLeft(time) {
    if (this.idInterval) {
      return;
    }
    this.timeLeft = time;
  }

  pad(value) {
    return value.length > 2 ? value : value.padStart(2, '0');
  }
}
