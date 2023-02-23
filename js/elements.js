const soundForest = document.querySelector('.forest');
const soundRain = document.querySelector('.rain');
const soundCoffe = document.querySelector('.coffeshop');
const soundFire = document.querySelector('.fireplace');
const cafeteria = new Audio('../sounds/Cafeteria.wav')
const chuva = new Audio('../sounds/Chuva.wav')
const floresta = new Audio('../sounds/Floresta.wav')
const lareira = new Audio('../sounds/Lareira.wav')
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonReset = document.querySelector('.reset');
const buttonPlus = document.querySelector('.plus');
const buttonMinus = document.querySelector('.minus');

export {
  soundForest,
  soundRain,
  soundCoffe,
  soundFire,
  cafeteria,
  chuva,
  floresta,
  lareira,
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonPause,
  buttonReset,
  buttonPlus,
  buttonMinus,
}