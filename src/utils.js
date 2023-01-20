import chocolate from "./img/chocolate.jpg";
import chips from "./img/chips.jpg";
import energy_drink from "./img/energy_drink.jpg";
import bubble_gym from "./img/bubble_gym.jpg";
import skittles from "./img/skittles.jpg";
import soda from "./img/soda.jpg";
import water from "./img/water.jpg";
import lollipop from "./img/lollipop.jpg";

export const products = [
  {
    id: 1,
    title: "Chocolate",
    price: 33,
    count: 50,
    imgUrl: chocolate,
    imgAlt: "chocolate",
  },
  {
    id: 2,
    title: "Chips",
    price: 54,
    count: 3,
    imgUrl: chips,
    imgAlt: "chips",
  },
  {
    id: 3,
    title: "Energy Drink",
    price: 46,
    count: 1,
    imgUrl: energy_drink,
    imgAlt: "energy_drink",
  },
  {
    id: 4,
    title: "Bubble Gym",
    price: 31,
    count: 4,
    imgUrl: bubble_gym,
    imgAlt: "bubble_gym",
  },
  {
    id: 5,
    title: "Skittles",
    price: 27,
    count: 5,
    imgUrl: skittles,
    imgAlt: "skittles",
  },
  {
    id: 6,
    title: "Soda",
    price: 35,
    count: 4,
    imgUrl: soda,
    imgAlt: "soda",
  },
  {
    id: 7,
    title: "Water",
    price: 30,
    count: 2,
    imgUrl: water,
    imgAlt: "water",
  },
  {
    id: 8,
    title: "Lollipop",
    price: 18,
    count: 3,
    imgUrl: lollipop,
    imgAlt: "lollipop",
  },
];

export const moneyReceiver = {
  1: 100,
  5: 50,
  10: 5,
  50: 10,
  100: 10,
  500: 0,
  1000: 1,
};

export const calculateRefund = (cashReceiver, cash) => {
  const updatedCashReceiver = { ...cashReceiver };
  const nominals = [500, 100, 50, 10, 5, 1];
  const coins = nominals.reduce((acc, curr) => {
    acc[curr] = 0;
    return acc;
  }, {});
  while (cash > 0) {
    for (let cost of nominals) {
      if (cash >= cost && updatedCashReceiver[cost]) {
        cash -= cost;
        updatedCashReceiver[cost]--;
        coins[cost]++;
        break;
      } else if (cost === 1) {
        return [false, updatedCashReceiver, coins];
      }
    }
  }
  return [true, updatedCashReceiver, coins];
};
