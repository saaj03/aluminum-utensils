import kadai from "../assets/images/kadai.jpg";
import degchi from "../assets/images/degchi.jpg";

const defaultProducts = [
  {
    id: 1,
    name: "Aluminum Kadai",
    price: 1200,
    description: "Heavy duty aluminum kadai",
    image: kadai
  },
  {
    id: 2,
    name: "Aluminum Degchi",
    price: 900,
    description: "Large degchi for bulk cooking",
    image: degchi
  }
];

const products =
  JSON.parse(localStorage.getItem("products")) || defaultProducts;

export default products;