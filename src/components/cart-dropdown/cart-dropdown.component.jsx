import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import "./cart-dropdown.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import {
  selectCartItems
} from "../redux/cart/cart-selectors";
import { toggleCartHidden } from "../redux/cart/cart-action";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      {cartItems.length ? (
        <div className="cart-items">
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
      ) : (
        <span className="empty-message"> Your cart is empty </span>
      )}
      <CustomButton
        inverted
        onClick={() => {
          dispatch(toggleCartHidden());
          history.push("/checkout");
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

// const mapDispatchToProps = (dispatch) => ({
//   toggleCart: () => dispatch(toggleCartHidden()),
// });
// (state) => ({
//     // cartItems: selectCartItems(state),
//     cartItems: state.cart.cartItems
// })

export default withRouter(connect(mapStateToProps)(CartDropdown));
