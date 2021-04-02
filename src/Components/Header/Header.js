import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './Header.css'

const Header = () => {
    const [loggedInUser, SetLoggedInUser] = useContext(userContext);
    return (
        <div className="container-fluid">
            <div className="row">
                <nav className="navbar navbar-expand-lg  bg-success my-menu">
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
                                    <Link className="nav-link active" aria-current="page" to="/order">Orders</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/admin">Admin</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/deals">Deals</Link>
                                </li>
                                <li className="nav-item">
                                {/* <Link className="nav-link" to="/login">Login</Link> */}
                                {loggedInUser.email ? <span className="nav-link">{loggedInUser.name}</span> : <Link className="nav-link" to="/login">Login</Link>}
                                  
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;