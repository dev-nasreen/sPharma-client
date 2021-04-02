import React from 'react';

const ManageProductList = ({pd}) => {
    const {name, quantity, price, _id} = pd;
    const handleDeleteProduct =(e, id)=>{
    
        fetch(`http://localhost:5050/delete/:${id}`,{
            method:'DELETE',
        })
        .then(res => res.json())
        .then(result =>console.log(result))
        // .then(result =>{
        //     console.log('deleted successfully', result)
        //     // if(result){
        //     //     e.target.parentNode.style.display = 'none';
        //     //     }
        //    })
        console.log(id);
        
    }
    return (
        <>
            <tr>
                <th>{name}</th>
                <th>{quantity}</th>
                <th>{price}</th>
                <th><span onClick={() => handleDeleteProduct(`"${_id}"`)}>delete</span>RiDeleteBin6Fill  FaUserEdit</th>
            </tr> 
        </>
    );
};

export default ManageProductList;