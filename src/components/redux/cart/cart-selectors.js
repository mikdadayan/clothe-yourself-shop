import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectHidden = createSelector([selectCart], (cart) => cart.hidden);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItmesPrice = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumuletedPrice, cartItem) => accumuletedPrice + cartItem.price * cartItem.quantity,
      0
    )
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumuletedQuantity, cartItem) =>
        accumuletedQuantity + cartItem.quantity ,
      0
    )
);
