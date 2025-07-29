const updateProduct = document.querySelector("#add-to-card");

export const updateData = (products) => {
  return (updateProduct.innerHTML = `<i class="fa-solid fa-cart-shopping"> ${products.length} </i>`);
};
