const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtnRef = document.querySelector('[data-action = start]');
const stopBtnRef = document.querySelector('[data-action = stop]');
const bodyRef = document.querySelector('body');

startBtnRef.addEventListener('click', onStart);
stopBtnRef.addEventListener('click', onStop);

let counterId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onStart() {
  startBtnRef.disabled = true;
  if (!counterId) {
    counterId = setInterval(() => {
      bodyRef.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
  }
}

function onStop() {
  clearInterval(counterId);
  startBtnRef.disabled = false;
}