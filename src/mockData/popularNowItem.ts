import {Item} from "../types/popularNowItem"

// Each item has an id, display text, and an image source for the food
export const items: Item[] = [
  {
    id: 1,
    text: "Saumon",
    image: require('../../assets/images/food/saumon-1.jpg'),
  },
  {
    id: 2,
    text: "Pancakes",
    image: require('../../assets/images/food/pancakes-1.jpg')
  },
  {
    id: 3,
    text: "Pizza",
    image: require('../../assets/images/food/pizza-2.jpg'),
  },
  {
    id: 4,
    text: "Burger",
    image: require('../../assets/images/food/burger-2.jpg')
  },
  {
    id: 5,
    text: "Sandwish",
    image:require('../../assets/images/food/sandwish-2.jpg')
   },
];