import { useEffect, useState, Suspense, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMoviesDetails } from 'fetch/FetchApi';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import MovieCard from 'components/MovieCard/MovieCard';
import Spiner from 'components/Spiner/Spiner';

const MoviesDetails = () => {
  const [moviesCard, setMoviesCard] = useState(null);
  const [error, setError] = useState('');
  const { moviesId } = useParams();
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/');
  
  useEffect(() => {
    const moviesDetails = async () => {
      try {        
        const data = await fetchMoviesDetails(moviesId);
        setMoviesCard(data);        
      } catch (error) {
        setError(error.message);
      }
    };
    moviesDetails();
  }, [moviesId]);

  return (
    <>
      {error && <h2>{error}</h2>}
      {
        <Link to={backLinkLocation.current}>
          <button type="button" style={{ marginBottom: '20px' }}>
            <BiArrowBack />
            Go back
          </button>
        </Link>
      }
      {moviesCard && <MovieCard moviesCard={moviesCard} />}
      {!error && (
        <>
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </>
      )}
      <Suspense fallback={<Spiner />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDetails;
