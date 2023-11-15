import React from 'react';
import './Cart.css';

const Cart = ({cartProduct}) => {
    // console.log(cartProduct);
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
        <div className='cart'>
            <h3 className='cart-title'>Order Summary</h3>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <p>Total Shipping Charge: ${shipphingCost.toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p style={{fontWeight:'600'}}>Grand Total: ${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;