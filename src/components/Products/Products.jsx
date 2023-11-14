import React, { useEffect, useState } from 'react';
import './Products.css'
import Product from '../Product/Product';
import OrderSummary from '../OrderSummary/OrderSummary';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cartProduct, setCartProduct] = useState([]);

    const handleCartProduct = (product) => {
        const newCartProduct = manageProduct(product);
        setCartProduct(newCartProduct);
    }

    const manageProduct = (product) => {
        const newProduct = cartProduct.find(singleProduct => singleProduct.id === product.id);
        // console.log(newProduct);
        if(newProduct){
            const updatedCartProduct = cartProduct.filter(singleProduct => {
                if(singleProduct.id === product.id){
                    singleProduct.quantity = singleProduct.quantity + 1; 
                }
                return singleProduct;
            });
            return updatedCartProduct;
        }
        else{
            return [...cartProduct, product];
        }

    }

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <section className='products-and-cart'>
            <div className='products'>
                {
                    products.map(product => <Product product={product} key={product.id} handleCartProduct={handleCartProduct}></Product>)
                }
            </div>
            <OrderSummary cartProduct={cartProduct}></OrderSummary>
        </section>
    );
};

export default Products;