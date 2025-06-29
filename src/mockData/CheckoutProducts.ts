import { Product } from "../types/product";

// each product has a unique id, a name, a price, and an associated image
export const products: Product[] = [
  {
    id: "1",
    name: "Burger",
    price: 10.99,
    image: require('../../assets/images/food/burger-2.jpg')
  },
  {
    id: "2",
    name: "Pizza",
    price: 15.49,
    image: require('../../assets/images/food/pizza-2.jpg'),
  },
  {
    id: "3",
    name: "Cookies",
    price: 2.99,
    image: require('../../assets/images/food/cookies-1.jpg')
  }
];