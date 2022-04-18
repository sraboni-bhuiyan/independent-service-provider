import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import ServicePreview from '../ServicePreview/ServicePreview';
import SuccessStory from '../SuccessStory/SuccessStory';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <SuccessStory></SuccessStory>
            <ServicePreview></ServicePreview>
            <Footer></Footer>
        </div>
    );
};

export default Home;