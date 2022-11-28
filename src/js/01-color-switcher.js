const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function updateBodyBGcolor(color) {
  document.body.style.backgroundColor = color;
}

class ColorSwitcher {
  constructor() {
    this.intervalID = null;
    this.isActive = false;
    this.updateBodyBGcolor = updateBodyBGcolor;
    stopBtn.disabled = true;
  }

  startChangeBGcolor() {
    if (this.isActive) {
      return;
    }

    startBtn.disabled = true;
    stopBtn.disabled = false;

    this.isActive = true;
    this.intervalID = setInterval(
      () => updateBodyBGcolor(getRandomHexColor()),
      1000
    );
  }

  stopChangeBGcolor() {
    startBtn.disabled = false;
    stopBtn.disabled = true;

    clearInterval(this.intervalID);
    this.isActive = false;
  }
}

const colorSwitcher = new ColorSwitcher();

startBtn.addEventListener('click', () => colorSwitcher.startChangeBGcolor());
stopBtn.addEventListener('click', () => colorSwitcher.stopChangeBGcolor());
