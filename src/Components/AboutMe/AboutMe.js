import React from 'react';

const AboutMe = () => {
    return (
        <div>
            <h2 className='m-5 w-50 mx-auto text-center fw-bsemibold fst-italic'>"I believe that the most important art in the world is the art you look at every day, the art that hangs on your walls or lives under your fingertips."</h2>
            <div className='d-flex align-items-center container'>
            <div>
                <img className='w-100' src="https://img.freepik.com/free-photo/studio-portrait-successful-young-businesswoman_1262-5844.jpg?t=st=1650242094~exp=1650242694~hmac=4684bbeba93a5de706b93e9f545b8e1e9965ddc6f119b54aae8ef8391b235190&w=1060" alt="" />
            </div>
            <div className='p-3'>
                <h3>Hello, I'm Sraboni</h3>
                <p>If your life looks great on paper but feels crap in real life, we need to talk. I am a Career Coach, specialising in helping student to balance professional success with their personal need and happiness.</p>
                <p>It starts with embracing your uniqueness, respecting your body and creating a sense of balance so you can thrive.</p>
                <p> I can help you enjoy the success you’ve strived so hard to achieve without having to sacrifice your soul to find it.</p>
            </div>
        </div>
        </div>
        
    );
};

export default AboutMe;