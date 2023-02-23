import {
  soundForest,
  soundRain,
  soundCoffe,
  soundFire,
  cafeteria,
  chuva,
  floresta,
  lareira,
  buttonPlay,
  buttonPause,
  buttonReset,
  buttonPlus,
  buttonMinus,
  forestInput,
  rainInput,
  coffeInput,
  fireInput,
  buttonSun,
  buttonMoon
} from './elements.js'

export default function Events({ sound, timer, controls, theme }) {

  buttonPlay.addEventListener('click', function () {
    controls.play()
    timer.countdown()
    timer.saveDefaultMinutes()
  });

  buttonPause.addEventListener('click', function () {
    controls.pause()
    timer.stop()
  });

  buttonReset.addEventListener('click', function () {
    controls.reset()
    timer.reset()
  });

  buttonPlus.addEventListener('click', function () {
    controls.plus()
  });

  buttonMinus.addEventListener('click', function () {
    controls.minus()
  });

  soundForest.addEventListener('click', function (event) {
    sound.playSound(soundForest, floresta, event)
  });

  soundRain.addEventListener('click', function (event) {
    sound.playSound(soundRain, chuva, event)
  });

  soundCoffe.addEventListener('click', function (event) {
    sound.playSound(soundCoffe, cafeteria, event)
  });

  soundFire.addEventListener('click', function (event) {
    sound.playSound(soundFire, lareira, event)
  });

  forestInput.addEventListener('input', function () {
    sound.setVolume(forestInput.value, floresta)
  });

  rainInput.addEventListener('input', function () {
    sound.setVolume(rainInput.value, chuva)
  });

  coffeInput.addEventListener('input', function () {
    sound.setVolume(coffeInput.value, cafeteria)
  });

  fireInput.addEventListener('input', function () {
    sound.setVolume(fireInput.value, lareira)
  });

  buttonSun.addEventListener('click', function() {
    theme.lightToDarkTheme(buttonSun, buttonMoon)
  });

  buttonMoon.addEventListener('click', function() {
    theme.darkToLightTheme(buttonSun, buttonMoon)
  });

}