import { fetchMovieReview } from 'fetch/FetchApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');
  const { moviesId } = useParams();

  useEffect(() => {
    if (moviesId === null) {
      return;
    }
    const getReviews = async () => {
      try {
        const data = await fetchMovieReview(moviesId);
        setReviews(data.results);
      } catch (error) {
        setError(error.message);
      }
    };
    getReviews();
  }, [moviesId]);

  return (
    <>
      {error && <div>{error}</div>}
      {reviews &&
        reviews.map(review => {
          return (
            <div key={review.id}>
              <h4>Author: {review.author}.</h4>
              <p>{review.content}</p>
            </div>
          );
        })}
      {reviews.length === 0 && <h3>No yet reviews about this film</h3>}
    </>
  );
};

export default Reviews;
