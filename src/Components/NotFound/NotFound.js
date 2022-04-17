import React from 'react';
import notfound from '../../images/notfound.jpg'

const NotFound = () => {
    return (
        <div className='container'>
            <h3 className='mt-5 text-center'>Page Not Found</h3>
            <div className='d-flex justify-content-center'>
            <img className='w-50' src={notfound} alt="" />
            </div>
        </div>
    );
};

export default NotFound;