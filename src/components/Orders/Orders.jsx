import React, { useState } from 'react';
import './Orders.css'
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewProduct from '../ReviewProduct/ReviewProduct';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const products = useLoaderData();
    const [cartProduct, setCartProduct] = useState(products);
    const clearCart = () => {
        setCartProduct([]);
        deleteShoppingCart();
    }
    const removeOrderedItem = (id) => {
        const newProducts = cartProduct.filter(product => product.id !== id);
        setCartProduct(newProducts);
        removeFromDb(id);
    }
    return (
        <div className='order-page'>
            <div className='ordered-product'>
                {
                    cartProduct.map(product => <ReviewProduct key={product.id} product={product} removeOrderedItem={removeOrderedItem}></ReviewProduct>)
                }
            </div>
            <div className=''>
                <Cart cartProduct={cartProduct} clearCart={clearCart}>Proceed Checkout</Cart>
            </div>
        </div>
    );
};

export default Orders;