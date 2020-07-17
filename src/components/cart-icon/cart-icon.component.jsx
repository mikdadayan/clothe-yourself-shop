import React from 'react';

import {ReactComponent as ShoppingCart} from '../../assets/shopping-bag.svg.svg';

import "./cart-icon.styles.scss";

const CartIcon = ({toggleCartHidden}) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingCart className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;