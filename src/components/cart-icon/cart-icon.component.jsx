import React from "react";

import { ReactComponent as ShoppingCart } from "../../assets/shopping-bag.svg.svg";

import "./cart-icon.styles.scss";
import { toggleCartHidden } from "../redux/cart/cart-action";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../redux/cart/cart-selectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingCart className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => {
    dispatch(toggleCartHidden());
  },
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

// (state) => {
//     console.log('I am from CART ITEM REDUCERs')
//   return {
//     itemCount: state.cart.cartItems.reduce((accumuletedQuantity, cartItem) => accumuletedQuantity + cartItem.quantity , 0)
//   }
//   console.log("I am from CART ITEM REDUCER");
//   return {
//     itemCount: selectCartItemsCount(state),
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
