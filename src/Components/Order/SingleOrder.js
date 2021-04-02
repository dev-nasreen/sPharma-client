import React from 'react';

const SingleOrder = ({ order }) => {
    const { product, date } = order;
    return (

        <tr>
            <th>{product.name}</th>
            <th>{product.quantity}</th>
            <th>${product.price}</th>
            <th>{date}</th>
        </tr>
    );
};

export default SingleOrder;