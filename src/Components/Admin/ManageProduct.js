import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import ManageProductList from './ManageProductList';

const ManageProduct = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Product Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(pd => <ManageProductList pd={pd} key={pd._id}></ManageProductList>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageProduct;