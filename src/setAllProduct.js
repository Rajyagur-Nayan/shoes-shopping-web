import { addProductItem } from "./addProductItem";
import { handleStockToggle } from "./handleStockToggle";

const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");

export const setAllProduct = (products) => {
  if (!products) {
    return false;
  }

  products.forEach((curProd) => {
    const { id, categoryName, image, price, description, quantity } = curProd;

    const productClone = document.importNode(productTemplate.content, true);

    productClone.querySelector(".category").textContent = categoryName;
    productClone.querySelector(".productImg").src = image;
    productClone.querySelector(".discretion").textContent = description;
    productClone.querySelector(".Offer-price").textContent = `$${price}`;
    productClone.querySelector(".main-price").textContent = `$${price * 2}`;
    productClone.querySelector("a").href = `/product.html?id=${id}`;
    productClone.querySelector(
      ".total-stock"
    ).textContent = `Total-Stock is :${quantity}`;

    productClone
      .querySelector(".Add-to-card")
      .addEventListener("click", (event) => {
        addProductItem(id, quantity, event);
      });

    productClone.querySelector("#productId").setAttribute("id", `card${id}`);

    productClone
      .querySelector(".add-remove")
      .addEventListener("click", (event) => {
        handleStockToggle(id, event, quantity);
      });

    productContainer.append(productClone);
  });
};
