import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons'
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cartProduct, setCartProduct] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const clearCart = () => {
        setCartProduct([]);
        deleteShoppingCart();
    }

    const handleCartProduct = (product) => {
        addToDb(product.id);
        const existedPd = cartProduct.find(pd => pd.id === product.id);
        let newCartProduct = [];
        if (existedPd) {
            newCartProduct = cartProduct.filter(pd => {
                if (pd.id === existedPd.id) {
                    pd.quantity = pd.quantity + 1;
                }
                return pd;
            })
        }
        else {
            product.quantity = 1;
            newCartProduct = [...cartProduct, product];
        }
        setCartProduct(newCartProduct);
        // setCartProduct(newCartProduct);
    }


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedProduct = getShoppingCart();
        const newCartProduct = [];

        if (products.length) {
            for (const id in storedProduct) {
                // console.log(id, storedProduct[id]);
                const savedProduct = products.find(pd => pd.id === id);
                savedProduct.quantity = storedProduct[id];
                newCartProduct.push(savedProduct);
            }
        }

        setCartProduct(newCartProduct);

    }, [products]);

    return (
        <section className='products-and-cart'>
            <div className='products'>
                {
                    products.map(product => <Product product={product} key={product.id} handleCartProduct={handleCartProduct}></Product>)
                }
            </div>



            <div className='cart-container'>
                <FontAwesomeIcon icon={faCartShopping} className={`shopping-cart-icon cart-show-icon ${showCart ? 'hidden' : ''}`} onClick={() => setShowCart(!showCart)} />
                <FontAwesomeIcon icon={faXmark} className={`shopping-cart-icon cart-hide-icon ${showCart ? 'show' : 'hidden'}`} onClick={() => setShowCart(!showCart)} />
                <Cart cartProduct={cartProduct} showCart={showCart} clearCart={clearCart}>Review Order</Cart>
            </div>
            {/* <OrderSummary cartProduct={cartProduct}></OrderSummary> */}
        </section>
    );
};

export default Shop;