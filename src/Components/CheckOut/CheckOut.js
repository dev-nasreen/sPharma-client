import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { userContext } from '../../App';

const CheckOut = () => {
   const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { _id } = useParams();
    const [date, setDate] = useState('');
    const [product, setProduct] = useState({});
    const history = useHistory();
    useEffect(() => {
        fetch(`https://shrouded-eyrie-05042.herokuapp.com/singleProduct/${_id}`)
            .then(res => res.json())
            .then(data => setProduct(data[0]))
    }, [_id])
   
    const handleDateChange = (e)=>{
        setDate(e.target.value)
    }
    const handleOrder = () =>{
        const productData ={...loggedInUser, product, date} 
        fetch('https://shrouded-eyrie-05042.herokuapp.com/addOrder',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(productData)
        })
        .then (res => console.log('server image response', res))
       alert('Your Order placed successfully');
        history.push('/')
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10 mx-auto mt-5">
                    <h3>Hello {loggedInUser.name}! Lets place order for the {product.name}</h3>
                    <div className="mb-3">
                    <label htmFor="date" className="form-label">Date of Placing order</label>
                    <input type="date" class="form-control" name="date" placeholder="Date of place Order" onChange={handleDateChange} />
                    </div>
                    <table className="table mt-5">
                        <thead>
                            <tr>
                                <th scope="col">Description</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{product.name}</td>
                                <td>{product.quantity}</td>
                                <td>$ {product.price}</td>
                            </tr>
                            <tr>
                                <th>Total</th>
                                <td></td>
                                <th>$ {product.price}</th>
                            </tr>
                        </tbody>
                    </table>
                    <button className="btn btn-success" style={{float:'right', marginRight:'100px'}} onClick={handleOrder}>Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;