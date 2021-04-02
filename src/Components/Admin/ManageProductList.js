import React, { useEffect, useState } from 'react';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { FaUserEdit } from 'react-icons/fa';

const ManageProductList = ({ pd }) => {
    const { name, quantity, price, _id } = pd;
    const [deleteSuccess, setDeleteSuccess] = useState(false);
    const handleDeleteProduct = (id) => {
        fetch(`https://shrouded-eyrie-05042.herokuapp.com/delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                setDeleteSuccess(result)
            
            })
       

    }
    return (
        <>
            <tr className={deleteSuccess?'d-none':'d-block'}>
                <th>{name}</th>
                <th>{quantity}</th>
                <th>{price}</th>
                <th><span style={{ cursor: 'pointer' }} onClick={() => handleDeleteProduct(_id)}><RiDeleteBin6Fill /></span> <span><FaUserEdit /></span> </th>
            </tr>
        </>
    );
};

export default ManageProductList;