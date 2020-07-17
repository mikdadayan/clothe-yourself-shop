import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import './cart-dropdown.styles.scss';
// import { connect } from "react-redux";

const CartDropdown = () => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'></div>
            <CustomButton inverted>GO TO CHECKOUT</CustomButton>
        </div>
    )
}


export default CartDropdown;