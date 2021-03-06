import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import './Admin.css'

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imgUrl, setImgUrl] = useState(null);
    const history = useHistory();
    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            quantity: data.quantity,
            imgUrl: imgUrl
        };
        console.log(productData);
        fetch('https://shrouded-eyrie-05042.herokuapp.com/addProduct', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productData)
        })
            .then(res => console.log('server image response', res))
        alert('Your Product Added successfully');
        history.push('/addProduct')
    }
    console.log('watching..', watch());
    const handleImageUpload = event => {
        //console.log(event.target.files);
        const imgData = new FormData();
        imgData.set('key', 'f8abae8e21b7331f6bd788466b3eb5a1')
        imgData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(res =>
                setImgUrl(res.data.data.display_url)
            )
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className="main-part">
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <h2 className="text-center">Add new Product.</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Product Name</label>
                                <input type="text" className="form-control" name="name" placeholder="Product Name" ref={register({ required: true })} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Price</label>
                                <input type="text" className="form-control" name="price" placeholder="Price" ref={register({ required: true })} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="quantity" className="form-label">Quantity</label>
                                <input type="number" className="form-control" name="quantity" placeholder="Quantity" ref={register({ required: true })} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">Upload Product Image</label>
                                <input type="file" className="form-control" name="image" placeholder="Product Image" onChange={handleImageUpload} ref={register({ required: true })} />
                            </div>
                            <div className="mb-3">
                                <button className="btn btn-primary">Add Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default AddProduct;

