export default function Theme() {

  function lightToDarkTheme(sun, moon) {
    sun.classList.add('hide')
    moon.classList.remove('hide')

    document.querySelector(':root').classList.add('dark-mode')
  }

  function darkToLightTheme(sun, moon) {
    sun.classList.remove('hide')
    moon.classList.add('hide')

    document.querySelector(':root').classList.remove('dark-mode')
  }

  return {
    lightToDarkTheme,
    darkToLightTheme
  }
}