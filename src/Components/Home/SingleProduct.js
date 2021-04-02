import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'


const SingleProduct = ({pd}) => {
    const {name, price, quantity, imgUrl, _id} = pd;
    return (
        <div className="col-md-3 mt-5">
            <div className="card pd" style={{width:"18rem"}}>
            <img src={imgUrl} class="card-img-top" alt="Medicine" />
            <div className="card-body">
                <h3 className="card-text">{name}</h3>
                <div className="d-flex mt-4 pd-info">
                    <h5>$ {price}</h5>
                   <Link to={"/checkOut/"+ _id}><button className="btn btn-success buy-btn">Buy Now</button></Link> 
                </div>
            </div>
             </div>
        </div>
    );
};

export default SingleProduct;