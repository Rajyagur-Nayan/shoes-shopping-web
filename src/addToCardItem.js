import product from "../public/api/product-list.json";
import { addItemQuantity } from "./addItemQuantity";
import { getTotalProduct } from "./getTotalProduct";
import { productStorage } from "./productStorage";
import { removeData } from "./removeData";
import { setPriceAndQuantity } from "./setPriceAndQuantity";

let localStorageData = productStorage();

//  match the selected data by using id

let filterData = product.filter((cardData) => {
  return localStorageData.some((cardElem) => cardData.id === cardElem.id);
});

//  add data into card

let card = document.querySelector(".ItemContainer");
let template = document.querySelector("#pTemplate");

filterData.forEach((product) => {
  const { id, categoryName, image, price, quantity } = product;

  let cardData = document.importNode(template.content, true);
  const priceAndQuantity = setPriceAndQuantity(id, price);

  cardData.querySelector("#product").setAttribute("id", `card${id}`);

  cardData.querySelector(".categorySection").textContent = categoryName;
  cardData.querySelector("#imgSection").src = image;

  cardData.querySelector(".priceSection").textContent = priceAndQuantity.price;
  cardData.querySelector(".quantityNumber").textContent =
    priceAndQuantity.quantity;
  cardData.querySelector("#removeData").addEventListener("click", () => {
    removeData(id);
  });

  cardData
    .querySelector(".add-remove-Item")
    .addEventListener("click", (event) => {
      addItemQuantity(id, quantity, event, price);
    });

  card.appendChild(cardData);
});

getTotalProduct();
