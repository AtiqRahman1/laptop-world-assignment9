import React from 'react';
import './Home.css';
import image from '../image/HP-laptop.jpg';

const Home = () => {
    return (
        <div>
            <section className='container'>
                <div className='image'>
                    <img src={image} alt="" />
                </div>
                <div className='text'>
                    <h1>Your dream !</h1>
                    <h1>Your laptop!!</h1>
                    <p>Create on-the-go with a convertible laptop designed to move with you. The power of a 360 degree hinge combined with the simultaneous use of touch and pen make for vibrant, accurate creations. With up a long battery life and peace of mind features, you can create from day to night with ease.</p>
                </div>
            </section>
            <section className='customer-container'>
                <h1>Customer Reviews</h1>
                <button className='reviews-btn'>See All Reviews</button>
            </section>
        </div>

    );
};

export default Home;