import Sounds from "./sounds.js"
import Timer from "./timer.js"
import Controls from "./controls.js"
import Theme from "./theme.js"
import Events from "./events.js"
import {
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonPause
} from "./elements.js"


const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonPause
})

const controls = Controls({
  buttonPlay,
  buttonPause,
  minutesDisplay,
  secondsDisplay
})

const sound = Sounds()

const theme = Theme()

Events({ sound, timer, controls, theme })