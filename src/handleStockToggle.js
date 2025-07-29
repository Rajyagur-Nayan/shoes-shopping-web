export const handleStockToggle = (id, event, quantity) => {
  // get the card
  let selectedProduct = document.querySelector(`#card${id}`);

  let productQuantity = selectedProduct.querySelector("#productQuantity");

  let productStock =
    parseInt(productQuantity.getAttribute("data-quantity")) || 1;

  const action = event.target.closest(".increment")
    ? "increment"
    : event.target.closest(".decrement")
    ? "decrement"
    : null;

  if (action == "increment" && productStock < quantity) {
    productStock += 1;
  }

  if (action == "decrement" && productStock > 1) {
    productStock -= 1;
  }

  productQuantity.innerText = productStock;
  productQuantity.setAttribute("data-quantity", productStock);
  return productStock;
};
