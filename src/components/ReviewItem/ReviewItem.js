import React from 'react';

const ReviewItem = (props) => {
    
    const {name, price, quantity, key} = props.product;
    const reviewItemStyle = {
        borderBottom: '1px solid lightgray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '150px'
    }
    return (
        <div style={reviewItemStyle}>
            <h4 className='product-name'>{name}</h4>
            <p><small>${price}</small></p>
            <p>Quantity : {quantity}</p>
            <br/>
            <button 
            onClick={()=>props.handleRemoveProduct(key)}
            className='button'>Remove</button>
        </div>
    );
};

export default ReviewItem;