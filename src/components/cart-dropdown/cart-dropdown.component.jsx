import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import './cart-dropdown.styles.scss';
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../redux/cart/cart-selectors";

const CartDropdown = ({cartItems}) => {
    console.log(cartItems)
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.map(item => {
                    return <CartItem key={item.id} {...item}/>
                })}
            </div>
            <CustomButton inverted>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => ({
    // cartItems: selectCartItems(state),
    cartItems: state.cart.cartItems
})

export default connect(mapStateToProps)(CartDropdown);