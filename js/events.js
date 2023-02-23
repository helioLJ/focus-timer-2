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

  soundForest.addEventListener('click', function () {
    sound.playSound(soundForest, floresta)
  });

  soundRain.addEventListener('click', function () {
    sound.playSound(soundRain, chuva)
  });

  soundCoffe.addEventListener('click', function () {
    sound.playSound(soundCoffe, cafeteria)
  });

  soundFire.addEventListener('click', function () {
    sound.playSound(soundFire, lareira)
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