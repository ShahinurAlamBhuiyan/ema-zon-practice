import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props.showAddToCartBtn)
    const { name, price, seller, stock, img, key } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="product-details">
                <h4> <Link to={'/product/'+key}>{name}</Link> </h4>
                <br/>
                <p><small>by {seller}</small></p>
                <br/>
                <p className='price'>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>

                { props.showAddToCartBtn && <button onClick={()=>props.handlerAddProduct(props.product)} className='button'><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>}
            </div>
        </div>
    );
};

export default Product;