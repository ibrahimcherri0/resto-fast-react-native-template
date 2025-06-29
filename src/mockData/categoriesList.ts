import { Category } from "../types/category";

// each category has an id, a display name, and an associated icon image
export const categoriesList: Category[] = [
  {
    id: 1,
    name: 'Burger',
    image: require('../../assets/images/categoriesIcons/hamburger.png'),
  },
  {
    id: 2,
    name: 'Pizza',
    image: require('../../assets/images/categoriesIcons/pizza.png'),
  },
  {
    id: 3,
    name: 'Salad',
    image: require('../../assets/images/categoriesIcons/salad.png'),
  },
  {
    id: 4,
    name: 'Sandwish',
    image: require('../../assets/images/categoriesIcons/bread.png'),
  },
  {
    id: 5,
    name: 'Noodle',
    image: require('../../assets/images/categoriesIcons/ramen.png'),
  },
  {
    id: 6,
    name: 'Fries',
    image: require('../../assets/images/categoriesIcons/french-fries.png'),
  },
  {
    id: 7,
    name: 'Dessert',
    image: require('../../assets/images/categoriesIcons/cupcake.png'),
  },
  {
    id: 8,
    name: 'Drink',
    image: require('../../assets/images/categoriesIcons/soda.png'),
  },
];