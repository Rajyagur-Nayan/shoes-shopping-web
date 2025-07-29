import { updateData } from "./updateProduct";

export const productStorage = () => {
  let storage = localStorage.getItem("products");

  if (!storage) {
    return [];
  }

  // add data to localStorage
  storage = JSON.parse(storage);

  //  update Card Data

  updateData(storage);
  return storage;
};
