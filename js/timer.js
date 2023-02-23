export default function Timer({
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonPause,
}) {

  let timerOut
  let defaultMinutes 

  function saveDefaultMinutes() {
    defaultMinutes = minutesDisplay.textContent
    console.log(defaultMinutes)
  }

  function reset() {
    minutesDisplay.textContent = defaultMinutes
    clearTimeout(timerOut)
  }

  function stop() {
    clearTimeout(timerOut)
  }

  function countdown() {
    timerOut = setTimeout(function () {
      if (Number(secondsDisplay.textContent) <= 0 && Number(minutesDisplay.textContent) <= 0) {
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
        minutesDisplay.textContent = defaultMinutes
        secondsDisplay.textContent = "00"
        alert("Acabou!")
        return
      }

      if (Number(secondsDisplay.textContent) <= 0) {
        secondsDisplay.textContent = 60
        minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 1).padStart(2, "0")
      }

      secondsDisplay.textContent = String(Number(secondsDisplay.textContent) - 1).padStart(2, "0")

      countdown()
    }, 1000)
  }

  return {
    countdown,
    stop,
    saveDefaultMinutes,
    reset
  }
}