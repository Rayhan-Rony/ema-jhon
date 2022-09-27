import React from 'react';

const Cart = ({ cart }) => {
    // console.log(cart)
    return (
        <div>
            <h2>this is order cart</h2>
            <p>selected:{cart.length}</p>
        </div>
    );
};

export default Cart;