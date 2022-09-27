import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { name, img, seller, price, ratings } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>price:${price}</p>
                <p><small>seller:{seller}</small></p>
                <p><small>rating: {ratings} stars</small></p>
            </div>
            <button className='btn-cart' onClick={() => props.handleAddToCart(props.product)}><p className='btn-text'>Add To Cart
            </p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;