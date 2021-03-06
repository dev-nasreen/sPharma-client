import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch('https://shrouded-eyrie-05042.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
   

    return (
       <>
        <div className="container-fluid">
            <div className="row">
                {products.length === 0 && <div className="spinner-border text-success s-spinner" role="status">
  <span className="visually-hidden">Loading...</span>
</div> }
                {
                    products.map(pd => <SingleProduct pd={pd} key={pd._id}></SingleProduct>)
                }
            </div>
        </div>
       </>
    );
};

export default Home;