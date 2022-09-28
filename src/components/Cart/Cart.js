import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let Total = 0;
    let Shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        Total = Total + product.price * product.quantity;
        Shipping = Shipping + product.shipping;

    }
    const tax = parseFloat((Total * 0.1).toFixed(2))
    const grandTotal = Total + Shipping + tax;
    // console.log(cart)
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>selected:{quantity}</p>
            <p>Price:${Total} </p>
            <p>Shipping:${Shipping} </p>
            <p>Tax:{tax}</p>
            <h5>Grand Total:{grandTotal.toFixed(2)} </h5>
        </div>
    );
};

export default Cart;