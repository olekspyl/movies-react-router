import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'utils/fetchReviews';
import { ReviewComponent } from 'components/reviewComponent';

const Reviews = () => {
  const [review, setReview] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const loadReviews = async movieId => {
      try {
        const resp = await fetchReviews(movieId);
        setReview(resp.data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        controller.abort();
      }
    };
    loadReviews();
  }, [movieId]);

  return (
    <>
      {review && <ReviewComponent review={review}></ReviewComponent>}
      {!review && <p>Sorry, there is no review </p>}
    </>
  );
};

export default Reviews;
