export default function() {

  function playSound(element, sound) {
    if (!element.classList.contains('active-sound')) {
      sound.play()
      sound.loop = true
      element.classList.add('active-sound')
    } else {
      sound.pause()
      element.classList.remove('active-sound')
    }
  }

  return {
    playSound
  }
}