import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    // console.log(props)
    const { name, price, seller, stock, img } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="product-details">
                <h4>{name}</h4>
                <br/>
                <p><small>by {seller}</small></p>
                <br/>
                <p className='price'>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={()=>props.handlerAddProduct(props.product)} className='add-cart-btn'><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>
            </div>
        </div>
    );
};

export default Product;