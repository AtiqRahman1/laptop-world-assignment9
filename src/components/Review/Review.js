import React from 'react';
import './Review.css'

const Review = (props) => {
    const { name, reviewdetail, ratings } = props.reviews;
    return (
        <div >
            <div className='card'>
                <h2>{name}</h2>
                <p><span className='text-review'>Review:</span>
                    {reviewdetail}</p>
                <p><small>Ratings: {ratings}</small></p>
            </div>
        </div>
    );
};

export default Review;