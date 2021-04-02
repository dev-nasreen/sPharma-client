import React from 'react';

const SingleOrder = ({ order }) => {
    const { product } = order;
    return (
        <tr>
            <th>{product.name}</th>
            <th>{product.quantity}</th>
            <th>${product.price}</th>
        </tr>
    );
};

export default SingleOrder;