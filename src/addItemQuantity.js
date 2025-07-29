import { getTotalProduct } from "./getTotalProduct";
import { productStorage } from "./productStorage";

export const addItemQuantity = (id, quantity, event, price) => {
  let localStorageData = productStorage();
  let selectedCard = document.getElementById(`card${id}`);
  let quantityDiv = selectedCard.querySelector(".quantityNumber");
  let productP = selectedCard.querySelector(".priceSection");

  let action = event.target.closest(".add-button")
    ? "add-button"
    : event.target.closest(".remove-button")
    ? "remove-button"
    : null;

  let localStoragePrice;
  let stock = 1;

  let localData = localStorageData.find((cardData) => {
    return cardData.id === id;
  });

  if (localData) {
    localStoragePrice = localData.price;
    stock = localData.stock;
  } else {
    localStoragePrice = price;
    price = price;
  }

  if (action === "add-button" && stock < quantity) {
    stock += 1;
  }
  if (action === "remove-button" && stock > 1) {
    stock -= 1;
  }

  localStoragePrice = Number(price) * Number(stock);

  let storageSet = { id, price: localStoragePrice, stock };
  storageSet = localStorageData.map((cardData) => {
    return cardData.id == id ? storageSet : cardData;
  });

  localStorage.setItem("products", JSON.stringify(storageSet));

  quantityDiv.innerHTML = stock;
  productP.innerHTML = localStoragePrice;

  getTotalProduct();
};
