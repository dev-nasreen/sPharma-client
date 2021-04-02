import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './AdminNav.css'

const AdminNav = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <div className="admin-nav">
            <div className="container-fluid">
                <div className="row">
                    <nav className="navbar navbar-expand-lg my-menu">
                        <div className="container">
                            <Link className="navbar-brand" to="#">sPharma</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/addProduct">Add Products</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/manageProduct">Manage Products</Link>
                                    </li>
                                    <li className="nav-item">
                                        {loggedInUser.email ? <span className="nav-link">{loggedInUser.name}</span> : <Link className="nav-link" to="/login">Login</Link>}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/addProduct">Add Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/manageProduct">Manage Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/editProduct">Edit Products</Link>
                        </li>
                    </ul> */}
                </div>
            </div>
        </div>
    );
};

export default AdminNav;