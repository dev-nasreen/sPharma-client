import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5050/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
   

    return (
       <>
        <div className="container-fluid">
            <div className="row">
                {
                    products.map(pd => <SingleProduct pd={pd} key={pd._id}></SingleProduct>)
                }
            </div>
        </div>
       </>
    );
};

export default Home;