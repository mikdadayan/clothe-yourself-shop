import React from "react";
import "./checkout-item.styles.scss"
import { connect } from "react-redux";
import { deleteCartItem, addItem, removeItem } from "../redux/cart/cart-action";
// import { addItemToCart, removeItemFromCart } from "../redux/cart/cart-utils";
// import CartItem from "../cart-item/cart-item.component";



const CheckoutItem = ({cartItem, deleteCartItem, addItem, removeItem}) => {
    const {imageUrl, name, quantity, price} = cartItem;
    console.log(cartItem)
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={imageUrl}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => {removeItem(cartItem)}}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => {addItem(cartItem)}}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => {deleteCartItem(cartItem)}}>&#10005;</div>
        </div>
    )
}

const mapStateToProps = (dispatch) => ({
    removeItem: (cartItem) => {dispatch(removeItem(cartItem))},
    addItem: (cartItem) => {dispatch(addItem(cartItem))},
    deleteCartItem: (cartItem) => (dispatch(deleteCartItem(cartItem)))
})

export default connect(null, mapStateToProps)(CheckoutItem);