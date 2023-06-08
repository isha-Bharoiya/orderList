import maggiImg from "../Images/BreackFast/maggi.jpg";
import cornImg from "../Images/BreackFast/corn.jpg";
import theplaImg from "../Images/BreackFast/Thepla.jpg";
import khamanImg from "../Images/BreackFast/Khaman.jpg";
import patudiImg from "../Images/BreackFast/Patudi.jpg";
import idaliImg from "../Images/BreackFast/Idali.jpg";
import aaluParathaImg from "../Images/Lunch/aaluParatha.jpg";
import gujaratiFullDishImg from "../Images/Lunch/gujaratiFullDish.jpg";
import KajuKariImg from "../Images/Lunch/kajuKariwithRoti.jpg";
import matarPanirImg from "../Images/Lunch/matarPanir.jpg";
import palakParathaImg from "../Images/Lunch/palakParatha.jpg";
import panirWithRotiImg from "../Images/Lunch/panirWithRoti.jpg";
import aalupriImg from "../Images/Evening/aalupuri.jpg";
import frenckyImg from "../Images/Evening/frencky.jpg";
import paniPuriImg from "../Images/Evening/panipuri.jpg";
import pastaImg from "../Images/Evening/pasta.jpg";
import puffImg from "../Images/Evening/puff.jpg";
import sandwichImg from "../Images/Evening/sandwich.jpg";
import dalMakhaniImg from "../Images/Dinner/dalMakhani.jpg";
import dhosaImg from "../Images/Dinner/dhosa.jpg";
import gujratiFullDishImg from "../Images/Dinner/gujarati-Full-Dish.jpg";
import manchurianImg from "../Images/Dinner/manchurian.jpg";
import pizzaImg from "../Images/Dinner/pizza.jpg";
import gujartiThaliImg from "../Images/Dinner/gujartiThali.jpg";

export const breackFastList = [
  {
    id: 1,
    foodName: "Thepla",
    img: theplaImg,
    price: 20,
    quantity: 5,
  },
  {
    id: 2,
    foodName: "Khaman",
    img: khamanImg,
    price: 100,
    quantity: "1 kg",
  },
  {
    id: 3,
    foodName: "Patudi",
    img: patudiImg,
    price: 100,
    quantity: "1 kg",
  },
  {
    id: 4,
    foodName: "Idali",
    img: idaliImg,
    price: 100,
    quantity: "1 kg",
  },
  {
    id: 5,
    foodName: "Maggi",
    img: maggiImg,
    price: 50,
    quantity: "1 plate",
  },
  {
    id: 6,
    foodName: "Corn",
    img: cornImg,
    price: 30,
    quantity: 1,
  },
];

export const lunchList = [
  {
    id: 1,
    foodName: "AaluParatha",
    img: aaluParathaImg,
    price: 120,
    quantity: 5,
  },
  {
    id: 2,
    foodName: "Gujarti-Full-Dish",
    img: gujaratiFullDishImg,
    price: 300,
    quantity: "1 Dish",
  },
  {
    id: 3,
    foodName: "KajuKari-With-Roti",
    img: KajuKariImg,
    price: 200,
    quantity: "1 Dish",
  },
  {
    id: 4,
    foodName: "MatarPanir",
    img: matarPanirImg,
    price: 200,
    quantity: "1 Dish",
  },
  {
    id: 5,
    foodName: "PalakParatha",
    img: palakParathaImg,
    price: 140,
    quantity: "1 Dish",
  },
  {
    id: 6,
    foodName: "PanirWithRoti",
    img: panirWithRotiImg,
    price: 250,
    quantity: "1 Dish",
  },
];

export const eveningItemsList = [
  {
    id: 1,
    foodName: "AaluPuri",
    img: aalupriImg,
    price: 30,
    quantity: "1(dish)",
  },
  {
    id: 2,
    foodName: "Frencky",
    img: frenckyImg,
    price: 50,
    quantity: 1,
  },
  {
    id: 3,
    foodName: "PaniPuri",
    img: paniPuriImg,
    price: 30,
    quantity: 7,
  },
  {
    id: 4,
    foodName: "Pasta",
    img: pastaImg,
    price: 100,
    quantity: "1 kg",
  },
  {
    id: 5,
    foodName: "Puff",
    img: puffImg,
    price: 50,
    quantity: 1,
  },
  {
    id: 6,
    foodName: "Sandwich",
    img: sandwichImg,
    price: 100,
    quantity: "1 plate",
  },
];

export const DinnerItemList = [
  {
    id: 1,
    foodName: "DalMakhani",
    img: dalMakhaniImg,
    price: 150,
    quantity: "1 Dish",
  },
  {
    id: 2,
    foodName: "Dhosa",
    img: dhosaImg,
    price: 120,
    quantity: "1 Dish",
  },
  {
    id: 3,
    foodName: "Gujarati-Full-Dish",
    img: gujratiFullDishImg,
    price: 170,
    quantity: "1 Dish",
  },
  {
    id: 4,
    foodName: "Manchurian",
    img: manchurianImg,
    price: 100,
    quantity: "1 plate",
  },
  {
    id: 5,
    foodName: "Pizza",
    img: pizzaImg,
    price: 150,
    quantity: "1 plate",
  },
  {
    id: 6,
    foodName: "Gujarati-Thali",
    img: gujartiThaliImg,
    price: 230,
    quantity: "1 Dish",
  },
];
export const allDishList = [...breackFastList, ...lunchList,...eveningItemsList,...DinnerItemList];
