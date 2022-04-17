import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../CustomLink/CustomLink';

const Navbar = () => {
    return (
        <div className='sticky-top'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container">
                    <Link className="navbar-brand" to='/'>Career Tracking Coach</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto my-2 mb-lg-0">
                        <li className="nav-item mx-2">
                        <CustomLink className="nav-link" aria-current="page" to='/'>Home</CustomLink>
                        </li>
                        <li className="nav-item mx-2">
                        <CustomLink className="nav-link" to='/services'>My Services</CustomLink>
                        </li>
                        <li className="nav-item mx-2">
                        <CustomLink className="nav-link" to='/blog'>Blog</CustomLink>
                        </li>
                        <li className="nav-item mx-2">
                        <CustomLink className="nav-link" to='/aboutme'>About Me</CustomLink>
                        </li>
                    </ul>
                    <span className="mx-2">
                        <CustomLink className="text-light nav-link" to='/cart'>Cart</CustomLink>
                    </span>
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