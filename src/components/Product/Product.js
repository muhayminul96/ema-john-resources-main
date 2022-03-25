import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img,ratings,price,seller,name} = props.product;
    return (
        <div  className='product'>
            <img src={img} alt="" srcset="" />
            <div className="product-info">
                <p className="product-name">{name}</p>
                <p>price {price}</p>
                <p><small>seller {seller}</small></p>
                <p><small>rating {ratings} star</small></p>
            </div>
            <button className='btn-cart' onClick={() => props.eventHandle(props.product)}> 
                <p>Add to cart</p>
            </button>
            
        </div>
    );
};

export default Product;