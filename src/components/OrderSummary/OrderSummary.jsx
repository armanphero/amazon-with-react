import React from 'react';
import './OrderSummary.css'

const OrderSummary = ({ cartProduct }) => {
    return (
        <div className='order-summary'>
            <h2>Order Summary</h2>
            <h3>Selected Items: {cartProduct.length}</h3>
            <div className='order-container'>
                {
                    cartProduct.map(product => <SingleProductOrderInfo product={product} key={product.id} />)
                }
            </div>
        </div>
    );
};


const SingleProductOrderInfo = ({ product }) => {
    // console.log(product);
    const { name, img, quantity } = product;
    return (
        <div className='order-info'>
            <img src={img} alt="" />
            <div className='details'>
                <h5>Name : {name.length > 20 ? name.slice(0, 20) + '...' : name}</h5>
                <p>Quantity : {quantity}</p>
            </div>
        </div>
    );
};


export default OrderSummary;