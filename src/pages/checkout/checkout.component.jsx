import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./checkout.styles.scss";
import { selectCartItmesPrice } from "../../components/redux/cart/cart-selectors";
import { selectCartItems } from "../../components/redux/cart/cart-selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button";

const CheckoutPage = ({ cartPrice, cartItems }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Name</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="total">
        <span>TOTAL: ${cartPrice}</span>
      </div>
      <div className='test-warning'>
        *Please use the following test credit card for payments*
        <br/>
        4242 4242 4242 4242 Exp: 01/20 - CVV: 123
      </div>
      <StripeCheckoutButton price={cartPrice}/>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartPrice: selectCartItmesPrice,
});

export default connect(mapStateToProps)(CheckoutPage);
