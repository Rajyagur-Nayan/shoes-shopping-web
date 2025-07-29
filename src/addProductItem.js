import { productStorage } from "./productStorage";

productStorage();

export const addProductItem = (id) => {
  let addProduct = productStorage();

  const selectProduct = document.querySelector(`#card${id}`);
  let stock = selectProduct.querySelector("#productQuantity").innerText;
  let price = selectProduct.querySelector(".Offer-price").innerText;

  let existingId = addProduct.find((cardData) => cardData.id === id);

  if (existingId && stock > 1) {
    stock = Number(existingId.stock) + Number(stock);
    price = price.replace("$", "");

    price = Number(price * stock);
    let changeDetails = { id, price, stock };
    changeDetails = addProduct.map((cardData) => {
      return cardData.id === id ? changeDetails : cardData;
    });

    localStorage.setItem("products", JSON.stringify(changeDetails));
  }

  if (existingId) {
    return false;
  }

  stock = Number(stock);
  price = price.replace("$", "");
  price = Number(price * stock);

  addProduct.push({ id, price, stock });
  localStorage.setItem("products", JSON.stringify(addProduct));
};
