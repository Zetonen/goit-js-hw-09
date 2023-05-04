export class ChangeRandomColor {
  constructor({ changeColor }) {
    this.isActiveInterval = false;
    this.idInterval = null;
    this.changeColor = changeColor;
  }

  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  start(delay) {
    if (this.isActiveInterval) {
      return;
    }
    this.isActiveInterval = true;
    this.idInterval = setInterval(() => {
      const color = this.getRandomHexColor();
      this.changeColor(color);
    }, delay);
  }

  stop() {
    if (!this.isActiveInterval) {
      return;
    }
    this.isActiveInterval = false;
    clearInterval(this.idInterval);
  }
}