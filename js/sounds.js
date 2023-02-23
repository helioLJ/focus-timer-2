export default function () {

  function playSound(element, sound) {
    if (!element.classList.contains('active-sound')) {
      sound.play()
      sound.volume = 0.5
      sound.loop = true
      element.classList.add('active-sound')
    } else {
      sound.pause()
      element.classList.remove('active-sound')
    }
  }

  function setVolume(volume, sound) {
    sound.volume = volume / 100
  }

  return {
    playSound,
    setVolume
  }
}