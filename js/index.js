const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonReset = document.querySelector('.reset');
const buttonPlus = document.querySelector('.plus');
const buttonMinus = document.querySelector('.minus');
const soundForest = document.querySelector('.forest');
const soundRain = document.querySelector('.rain');
const soundCoffe = document.querySelector('.coffeshop');
const soundFire = document.querySelector('.fireplace');
const soundButtons = document.querySelectorAll('.sounds button')
const cafeteria = new Audio('../sounds/Cafeteria.wav')
const chuva = new Audio('../sounds/Chuva.wav')
const floresta = new Audio('../sounds/Floresta.wav')
const lareira = new Audio('../sounds/Lareira.wav')

let timerOut

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')

  countdown()

  function countdown() {
    timerOut = setTimeout(function () {
      if (Number(secondsDisplay.textContent) <= 0 && Number(minutesDisplay.textContent) <= 0) {
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
        minutesDisplay.textContent = "05"
        secondsDisplay.textContent = "00"
        alert("Acabou!")
        return
      }

      if (Number(secondsDisplay.textContent) <= 0) {
        secondsDisplay.textContent = 2
        minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 1).padStart(2, "0")
      }

      secondsDisplay.textContent = String(Number(secondsDisplay.textContent) - 1).padStart(2, "0")

      countdown()
    }, 1000)
  }
});

buttonPause.addEventListener('click', function () {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  clearTimeout(timerOut)
});

buttonReset.addEventListener('click', function () {
  minutesDisplay.textContent = "05"
  secondsDisplay.textContent = "00"
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  clearTimeout(timerOut)
});

buttonPlus.addEventListener('click', function () {
  let newMinutes = Number(minutesDisplay.textContent) + 5
  minutesDisplay.textContent = newMinutes <= 60 ? String(newMinutes).padStart(2, "0") : minutesDisplay.textContent
});

buttonMinus.addEventListener('click', function () {
  let newMinutes = Number(minutesDisplay.textContent) - 5
  minutesDisplay.textContent = newMinutes >= 0 ? String(newMinutes).padStart(2, "0") : minutesDisplay.textContent
});

soundForest.addEventListener('click', function () {
  playSound(soundForest, floresta)
});

soundRain.addEventListener('click', function () {
  playSound(soundRain, chuva)
});

soundCoffe.addEventListener('click', function () {
  playSound(soundCoffe, cafeteria)
});

soundFire.addEventListener('click', function () {
  playSound(soundFire, lareira)
});

function playSound(element, sound) {
  if (!element.classList.contains('active-sound')) {
    sound.play()
    element.classList.add('active-sound')
  } else {
    sound.pause()
    element.classList.remove('active-sound')
  }
}