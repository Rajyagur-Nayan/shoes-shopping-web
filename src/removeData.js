import { productStorage } from "./productStorage";
import { updateData } from "./updateProduct";

export const removeData = (id) => {
  let RemoveItem = productStorage();

  RemoveItem = RemoveItem.filter((cardData) => cardData.id != id);
  let productDiv = document.getElementById(`card${id}`);

  if (productDiv) {
    productDiv.remove();
  }

  updateData(RemoveItem);

  localStorage.setItem("products", JSON.stringify(RemoveItem));
};
