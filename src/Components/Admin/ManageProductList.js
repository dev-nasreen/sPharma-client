import React from 'react';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { FaUserEdit } from 'react-icons/fa';

const ManageProductList = ({pd}) => {
    const {name, quantity, price, _id} = pd;

    const handleDeleteProduct =(Event, id)=>{
    
        fetch(`http://localhost:5000/delete/:${id}`,{
            method:'DELETE',
        })
        .then(res => res.json())
        .then(result =>{
            console.log('deleted successfully', result)
            if(result){
                Event.target.parentNode.style.display = 'none';
                }
           })
        console.log(id);
        
    }
    return (
        <>
            <tr>
                <th>{name}</th>
                <th>{quantity}</th>
                <th>{price}</th>
                <th><span onClick={() => handleDeleteProduct(Event, `"${_id}"`)}><RiDeleteBin6Fill /></span> <span><FaUserEdit /></span> </th>
            </tr> 
        </>
    );
};

export default ManageProductList;