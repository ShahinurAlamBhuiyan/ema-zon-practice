import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart)

    // const total = cart.reduce((total, prd),()=> total + prd.price, 0);

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
        // console.log(product)
    }
    const tax = total / 10;

    let shipping = 0;
    if (total > 40) {
        shipping = 0;
    }
    else if(total > 20){
        shipping = 8.99;
    }
    else if(total > 0){
        shipping = 15.99;
    }
    const grandTotal = total + tax + shipping;

    const formatNumber = (num) =>{
        const parseNum = num.toFixed(2);
        return Number(parseNum);
    }
    return (
        <div className='cart'>
                <h3>Order Summary</h3>
                <p>Items ordered : {cart.length}</p>
                <p><small>Product price: ${formatNumber(total)}</small></p>
                <p><small>Shipping & Handling: ${formatNumber(shipping)}</small></p>
                <p><small>Estimated Tax(10%): ${formatNumber(tax)}</small></p>
                <h3 className='price'>Order Total: ${formatNumber(grandTotal)}</h3>
                {
                    props.children
                }
            </div>
    );
};

export default Cart;