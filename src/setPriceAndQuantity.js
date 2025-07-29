import { productStorage } from "./productStorage";

export const setPriceAndQuantity = (id, price) => {
  let localStorageData = productStorage();
  let quantity = 1;

  let existingProduct = localStorageData.find((cardData) => cardData.id === id);

  if (existingProduct) {
    price = existingProduct.price;
    quantity = existingProduct.stock;
  }

  return { price, quantity };
};
