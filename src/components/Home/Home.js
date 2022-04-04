import React from 'react';
import './Home.css';
import image from '../image/HP-laptop.jpg';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import { Link } from 'react-router-dom';


const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <section className='container'>
                <div className='image'>
                    <img src={image} alt="" />
                </div>
                <div className='text-area'>
                    <h1>Your dream !</h1>
                    <h1>Your laptop!!</h1>
                    <p>Create on-the-go with a convertible laptop designed to move with you. The power of a 360 degree hinge combined with the simultaneous use of touch and pen make for vibrant, accurate creations. With up a long battery life and peace of mind features, you can create from day to night with ease.</p>
                </div>
            </section>
            <section className='customer-container'>
                <h1>Customer Reviews</h1>
                <div className="customer-review">
                    {
                        reviews.slice(0, 3).map(review => <Review
                            key={review.id}
                            reviews={review}
                        ></Review>)
                    }
                </div>

                <Link className='link-btn' to="/reviews">See All Reviews</Link>

            </section>
        </div>

    );
};

export default Home;