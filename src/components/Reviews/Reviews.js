import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews();

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