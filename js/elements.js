const buttonPlay = document.querySelector('.play');
const buttonStop = document.querySelector('.stop');
const buttonAddTime = document.querySelector('.add-time');
const buttonReduceTime = document.querySelector('.reduce-time');
const buttonForest = document.querySelector('.forest');
const buttonRain = document.querySelector('.rain');
const buttonCoffeeShop = document.querySelector('.coffee-shop');
const buttonFireplace = document.querySelector('.fireplace');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
const buttonForestVolume = document.querySelector('input[name="forest-volume"]');
const buttonRainVolume = document.querySelector('input[name="rain-volume"]');
const buttonCoffeeShopVolume = document.querySelector('input[name="coffee-shop-volume"]');
const buttonFireplaceVolume = document.querySelector('input[name="fireplace-volume"]');

const bodyElement = document.querySelector('body');
const svgElement = document.querySelector('svg');
const timerClass = document.querySelector('.timer');
const buttonElement = document.querySelector('button');
const lightClass = document.querySelector('.light');
const darkClass = document.querySelector('.dark');

export {
  buttonPlay,
  buttonStop,
  buttonAddTime,
  buttonReduceTime,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFireplace,
  minutesDisplay,
  secondsDisplay,
  buttonForestVolume,
  buttonRainVolume,
  buttonCoffeeShopVolume,
  buttonFireplaceVolume,
  bodyElement,
  svgElement,
  timerClass,
  buttonElement,
  lightClass,
  darkClass
}
