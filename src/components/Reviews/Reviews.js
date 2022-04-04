
import { useEffect, useState } from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    // const [reviews, setReviews] = useReviews();
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);


    return (
        <div>

            <div className='review-info'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        reviews={review}
                    ></Review>)
                }

            </div>
        </div>
    );
};

export default Reviews;