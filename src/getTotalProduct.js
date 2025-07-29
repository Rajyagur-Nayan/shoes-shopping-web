import { productStorage } from "./productStorage";

export const getTotalProduct = () => {
  let selectedProduct = productStorage();

  let TotalStockDiv = document.querySelector(".total-amount");
  let TotalPriceDiv = document.querySelector(".price");
  let TotalPayment = document.querySelector(".product-price");

  let initialValue = 0;
  let TotalProductPrice = selectedProduct.reduce((accum, cardElem) => {
    let productPrice = parseInt(cardElem.price) || 0;
    const TotalPrice = accum + productPrice;
    return TotalPrice;
  }, initialValue);

  let TotalProductStock = selectedProduct.reduce((accum, cardElem) => {
    let productStock = parseInt(cardElem.stock) || 0;
    const TotalStock = accum + productStock;
    return TotalStock;
  }, initialValue);

  TotalPriceDiv.textContent = TotalProductPrice;
  TotalStockDiv.textContent = TotalProductStock;
  TotalPayment.textContent = TotalProductPrice + 100;
};
