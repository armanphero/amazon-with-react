const manageProduct = (product, cartProduct) => {
    const newProduct = cartProduct.find(singleProduct => singleProduct.id === product.id);
    // console.log(newProduct);
    if (newProduct) {
        const updatedCartProduct = cartProduct.filter(singleProduct => {
            if (singleProduct.id === product.id) {
                singleProduct.quantity = singleProduct.quantity + 1;
            }
            return singleProduct;
        });
        return updatedCartProduct;
    }
    else {
        return [...cartProduct, product];
    }

}

export {manageProduct};