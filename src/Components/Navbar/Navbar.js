import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to='/'>Career Tracker</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to='/services'>Our Services</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to='/blog'>Blog</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to='/aboutme'>About Me</Link>
                        </li>
                    </ul>
                    <span className="navbar-text">
                    <Link className="nav-link bg-light text-dark" to='/login'>Login</Link>
                    </span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;