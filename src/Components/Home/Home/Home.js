import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../../Footer/Footer';
import ServicePreview from '../ServicePreview/ServicePreview';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <ServicePreview></ServicePreview>
        </div>
    );
};

export default Home;