// import { TOGGLE_CART_HIDDEN } from "./cart-types";
import { addItemToCart, removeItemFromCart } from "./cart-utils";

import { CartActionTypes } from "./cart-types";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.DELETE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => action.payload.id !== cartItem.id),
      };
    case CartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};


export default cartReducer;
