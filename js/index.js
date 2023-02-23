import Sounds from "./sounds.js"
import Timer from "./timer.js"
import Controls from "./controls.js"
import Events from "./events.js"
import {
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonPause,
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

Events({ sound, timer, controls })