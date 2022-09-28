export default function Sounds() {
  const forest = new Audio("../assets/Forest.wav");
  const rain = new Audio("../assets/Rain.wav");
  const coffeeShop = new Audio("../assets/Coffee-shop.wav");
  const fireplace = new Audio("../assets/Fireplace.wav");

  forest.loop = true;
  rain.loop = true;
  coffeeShop.loop = true;
  fireplace.loop = true;

  return {
    forest,
    rain,
    coffeeShop,
    fireplace
  }
}
