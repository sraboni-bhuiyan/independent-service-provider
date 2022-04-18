import React from 'react';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();


    return (
        <div className='bg-dark text-light text-center mt-5'>
            <footer className='pt-5 pb-4'>
                <p><small>copyright &copy; {year} Sraboni Bhuiyan</small></p>
            </footer>
        </div>
    );
};

export default Footer;