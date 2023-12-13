import { getShoppingCart } from "./fakedb"

const storedProducts = async() => {
    const res = await fetch('products.json');
    const data = await res.json();
    const productsObj =  getShoppingCart();
    const savedProducts = [];
    for(const id in productsObj){
        const product = data.find(pd => pd.id === id);
        product.quantity = productsObj[id];
        savedProducts.push(product);
    }
    return savedProducts;
} 



export default storedProducts;