import React, { useEffect, useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';


const Shop = () => {
    const first15 = (fakeData.slice(0, 15))
    const [products, setProducts] = useState(first15)
    const [cart, setCart] = useState([])

    // take data from local storage....
    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        const previousCart = productKeys.map( existingKey =>{
            const product = fakeData.find( pd => pd.key === existingKey );
            product.quantity = savedCart[existingKey];
            return product;
        })
        setCart(previousCart)
    },[])

    const handlerAddProduct = (product) => {
        const toBeAddedKey = product.key
        const sameProduct = cart.find( pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey)
            newCart = [...others, sameProduct]
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product]
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count)
    }

    return (
        <div className='shop'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.key}
                        showAddToCartBtn={true}
                        handlerAddProduct={handlerAddProduct}
                        product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/review'>
                        <button className='button'>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;