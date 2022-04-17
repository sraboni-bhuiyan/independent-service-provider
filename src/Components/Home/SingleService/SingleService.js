import React from 'react';
import { Link } from 'react-router-dom';

const singleService = ({service}) => {

    const {id, name, price, image, description} = service;

    return (
        <div className='col-lg-4 col-md-6 col-sm-12 py-4'>
            <div className="card bg-secondary text-white text-center shadow-lg">
                <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title fst-italic">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className='fw-bold'>Fees : ${price}</p>
                    <div className=''>
                    <Link to='services' className='btn btn-light'>Book Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default singleService;