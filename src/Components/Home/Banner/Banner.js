import React from 'react';
import banner1 from '../../../images/banner1.jpg'


const Banner = () => {
    return (
        <div className='border mt-5 p-2'>
            <div className='row align-items-center justify-content-center gap-0'>
                <div className='col-md-6 col-sm-12'>
                    <img className='img-fluid' src={banner1} alt='...'/>
                </div>
                <div className='col-md-6 col-sm-12 text-center'>
                    <h3 className='fs-2 fst-italic text-secondary'>An extraordinary life starts with a</h3>
                    <h3 className='fs-2 fst-italic text-secondary'><span className='fw-bold text-dark'>Perfect Career</span></h3>
                    <p className='fs-5 mt-4 fst-italic'>Discover three simple actions you can take right now to positively impact your thoughts, objective and career goal with me.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;