import {
  buttonPlay,
  buttonStop,
  buttonAddTime,
  buttonReduceTime,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFireplace,
  minutesDisplay,
  secondsDisplay
} from "./elements.js";
import Controls from "./controls.js";
import Timer from "./timer.js";
import Sounds from "./sounds.js";

const control = new Controls({
  buttonPlay, buttonStop
});
const timer = Timer({
  play: control.play, pause: control.pause, minutesDisplay, secondsDisplay
})
const sounds = Sounds();

buttonPlay.addEventListener('click', timer.countDown);
buttonStop.addEventListener('click', timer.stopCountDown);
buttonAddTime.addEventListener('click', timer.add);
buttonReduceTime.addEventListener('click', timer.reduce);

buttonForest.addEventListener('click', () => {
  control.music(buttonForest, sounds.forest);
});

buttonRain.addEventListener('click', () => {
  control.music(buttonRain, sounds.rain);
});

buttonCoffeeShop.addEventListener('click', () => {
  control.music(buttonCoffeeShop, sounds.coffeeShop);
});

buttonFireplace.addEventListener('click', () => {
  control.music(buttonFireplace, sounds.fireplace);
});
