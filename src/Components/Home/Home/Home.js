import React from 'react';
import Banner from '../Banner/Banner';
import ServicePreview from '../ServicePreview/ServicePreview';
import Footer from '../../Footer/Footer';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <ServicePreview></ServicePreview>
            <Footer></Footer>
        </div>
    );
};

export default Home;