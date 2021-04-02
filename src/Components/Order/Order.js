import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import SingleOrder from './SingleOrder';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://shrouded-eyrie-05042.herokuapp.com/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    console.log(orders)
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-10 col-10 mt-5 mx-auto">
                    {/* <h3 className="mb-5">Dear {orders[0].name}! Here is the list of your product orders:</h3> */}
                    <table class="table">
                        <thead>
                            <tr style={{ fontSize: '30px', color: '#198754' }}>
                                <th scope="col">Product Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                <th scope="col">Date of Order</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => <SingleOrder order={order} key={order._id}></SingleOrder>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Order;
