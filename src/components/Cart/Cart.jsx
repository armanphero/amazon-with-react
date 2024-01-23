import React, { useState } from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faArrowRight,  } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Cart = ({ cartProduct, children, clearCart, showCart }) => {
    let totalPrice = 0;
    let shipphingCost = 0;
    cartProduct.forEach(product => {
        // console.log(product);
        totalPrice = totalPrice + (product.price * product.quantity);
        shipphingCost = shipphingCost + product.shipping;
    })
    const tax = (totalPrice * 7) / 100;
    const grandTotal = totalPrice + shipphingCost + tax;
    return (
        <div className={`cart ${showCart ? 'show' : ''}`}>
            <h3 className='cart-title'>Order Summary</h3>
            <p>Selected Items: {cartProduct.length}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <p>Total Shipping Charge: ${shipphingCost.toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p style={{ fontWeight: '600' }}>Grand Total: ${grandTotal.toFixed(2)}</p>
            <div>
                <a className='cart-btn cart-clear-btn-color' onClick={clearCart}>Clear Cart <FontAwesomeIcon icon={faTrash} /></a>
                {
                    children === "Review Order" &&
                    <Link to='/orders' className='cart-btn cart-other-btn-color'>{children} <FontAwesomeIcon icon={faArrowRight} /></Link>
                }
                {
                    children === "Proceed Checkout" &&
                    <Link to='/checkout' className='cart-btn cart-other-btn-color'>{children} <FontAwesomeIcon icon={faArrowRight} /></Link>
                }
            </div>
        </div>
    );
};

export default Cart;