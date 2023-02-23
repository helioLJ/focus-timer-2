export default function() {

  function playSound(element, sound) {
    if (!element.classList.contains('active-sound')) {
      sound.play()
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