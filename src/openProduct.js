import product from "../public/api/product-list.json";
import { productStorage } from "./productStorage";

const openProduct = (id) => {
  const productData = document.querySelector(".productData");
  const Template = document.querySelector("#openTemplate");

  if (!Template || !productData) return;

  let selectedProduct = product.find((item) => item.id == id);

  if (!selectedProduct) return;

  let { image, description, price, categoryName } = selectedProduct;

  let clone = document.importNode(Template.content, true);

  clone.querySelector(".productImage").src = image;
  clone.querySelector("#category").textContent = categoryName;
  clone.querySelector(".price").textContent = `₹${price}`;
  clone.querySelector(".old-price").textContent = `₹${price}`;
  clone.querySelector(".description").textContent = description;
  productData.append(clone);

  // update the localStorage Data

  //   let quantity = clone.querySelector("#productData");
  //   let quantityValue = quantity.textContent.value;
  //   clone.querySelector(".add-to-card").addEventListener("click", () => {
  //     updateLocalData(quantityValue);
  //   });
};

//  read id from url

const urlPrams = new URLSearchParams(window.location.search);
const productId = urlPrams.get("id");

if (productId) {
  openProduct(productId);
}

// update function

// const updateLocalData = (quantityValue) => {
//   let localStorageData = productStorage();
//   localStorageData.push({ quantityValue });
//   localStorageData.setItem("products", JSON.stringify(quantityValue));
// };
