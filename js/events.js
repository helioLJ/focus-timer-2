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
  buttonMinus
} from './elements.js'

export default function Events({ sound, timer, controls }) {

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
}