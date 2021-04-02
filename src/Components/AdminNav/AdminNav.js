import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNav.css'

const AdminNav = () => {
    return (
        <div className="admin-nav">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/addProduct">Add Products</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/manageProduct">Manage Products</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/editProduct">Edit Products</Link>
                </li>
            </ul>
        </div>
    );
};

export default AdminNav;