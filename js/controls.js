export default function Controls({
  buttonPlay,
  buttonPause,
  minutesDisplay,
  secondsDisplay
}) {

  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
  }

  function pause() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  function reset() {
    minutesDisplay.textContent = "05"
    secondsDisplay.textContent = "00"
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  function plus() {
    let newMinutes = Number(minutesDisplay.textContent) + 5
    minutesDisplay.textContent = newMinutes <= 60 ? String(newMinutes).padStart(2, "0") : minutesDisplay.textContent
  }

  function minus() {
    let newMinutes = Number(minutesDisplay.textContent) - 5
    minutesDisplay.textContent = newMinutes >= 0 ? String(newMinutes).padStart(2, "0") : minutesDisplay.textContent
  }

  return {
    play,
    pause,
    reset,
    plus,
    minus
  }
}