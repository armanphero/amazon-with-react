import React from 'react';
import './ReviewProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const ReviewProduct = ({ product, removeOrderedItem}) => {
    // console.log(product);
    const { img, name, price, quantity, id} = product;
    return (
        <div className='review-cart'>
            <img src={img} alt="" />
            <div className='review-cart-info'>
                <div>
                    <h3 className='review-name'>{name.length > 25 ? name.substring(0, 25) + '..' : name}</h3>
                    <h5 className='review-price'>Price: ${price}</h5>
                    <h5 className='review-quantity'>Quantity: {quantity}</h5>
                </div>
            </div>
            <span className='trash-icon' onClick={() => removeOrderedItem(id)}>
                <FontAwesomeIcon icon={faTrash} />
            </span>
        </div>
    );
};

export default ReviewProduct;