export const updateCart = (state) => {
  // subtotal carts
  state.itemsPrice = state.cartItems.reduce(
    (subTotal, product) => subTotal + product.price * product.qty,
    0
  );
  // shipping price
  state.shippingPrice = state.itemsPrice > 50000 ? 0 : 10000;

  // 11 tax
  state.taxPrice = Math.round(Number(0.11 * state.itemsPrice));

  // total price
  state.totalPrice =
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice);

  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
