import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const SuccessStory = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    };

    return (
        <div className='container w-lg-75 w-sm-50 mx-auto my-5'>
            <h3 className='mb-5 text-center fw-bold fst-italic'>Success Stories</h3>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                    className="d-block w-100" style={{height:'600px'}}
                    src="https://img.freepik.com/free-photo/close-up-smiley-woman-work_23-2149300653.jpg?t=st=1650275307~exp=1650275907~hmac=c68240c70d90e4aa8d83a231765fe97886238b63fa9fe1936c9103f77a107f3c&w=1380"
                    alt="First slide"
                    />
                    <Carousel.Caption className='bg-dark w-50 mx-auto rounded-3'>
                    <h3>Fransisca Herris</h3>
                    <p>Meet my first client who was worried of her age and study gap, but still managed to land in a job that she dreamt of. She is now working as a Finance Advisor in a MTB Tech Co.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100" style={{height:'600px'}}
                    src="https://img.freepik.com/free-photo/medium-shot-man-talking-phone_23-2149300623.jpg?t=st=1650275307~exp=1650275907~hmac=d6675ef6dc99adf1a3a8f90109582c1204dcbfc1cced104ab71612fcec32f9f6&w=1380"
                    alt="Second slide"
                    />

                    <Carousel.Caption className='bg-dark w-50 mx-auto rounded-3'>
                    <h3>Milton Mathius</h3>
                    <p>Once upon a time he was lost and financially unstable. That time he reached out to me. I was luck to mentor him for his business planning. Now he make six figures a month, owning a clothing import business for his own.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100" style={{height:'600px'}}
                    src="https://img.freepik.com/free-photo/medium-shot-woman-holding-tablet_23-2149151168.jpg?w=1380"
                    alt="Third slide"
                    />

                    <Carousel.Caption className='bg-dark w-50 mx-auto rounded-3'>
                    <h3>Jessica Rogario</h3>
                    <p>She was one of my favourites. Jessica is very strong-minded and hardworking. I am so lucky that i managed to recover her trust and confidence about her capabilities. She is now working as a Business Analyst in GoldMann Sach.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100" style={{height:'600px'}}
                    src="https://img.freepik.com/free-photo/amazing-businesswoman-holding-silver-laptop-pointing-finger-sideways-with-smile-white-wall_171337-1172.jpg?t=st=1650277043~exp=1650277643~hmac=e8a1bb05b8122927f779dad3c8a170443cc2a9d2b4c0fb4dd3229468429f3224&w=1380"
                    alt="Third slide"
                    />

                    <Carousel.Caption className='bg-dark w-50 mx-auto rounded-3'>
                    <p>Want to know more about my programms? Check out my Services. . .</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}


export default SuccessStory;