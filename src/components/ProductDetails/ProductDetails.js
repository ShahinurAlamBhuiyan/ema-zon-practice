import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './ProductDetails.css'

const ProductDetails = () => {
    const {productKey} = useParams()
    const product = fakeData.find(pd => pd.key === productKey)
    const {name, img, category,seller, star, price} = product;
    console.log(product);
    return (
        <div className='productDetails'>
            <img src={img} alt=""/>
            <h2>{name}</h2>
            <h3>By {seller}</h3>
            <h3>Category : {category}</h3>
            <h2>Star : {star}</h2>
            <h3 className='price'>Price : ${price}</h3>


            {/* <Product 
                showAddToCartBtn={false}
                product={product}></Product> */}
        </div>
    );
};

export default ProductDetails;