import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchMoviesDetails } from 'fetch/FetchApi';
import { Link } from 'react-router-dom';
import MovieCard from 'components/MovieCard/MovieCard';
import { BiArrowBack } from 'react-icons/bi';

const MoviesDetails = () => {
  const [moviesCard, setMoviesCard] = useState();
  const [error, setError] = useState();
  const { moviesId } = useParams();

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
      <Link to={`/`}>
        <button style={{ marginBottom: '20px' }}>
          <BiArrowBack />
          Back to homepage</button>
      </Link>

      {error && <h2>{error}</h2>}
      {moviesCard && <MovieCard moviesCard={moviesCard} />}
      {!error && (
      <>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to='cast'>Cast</Link>
        </li>
        <li>
          <Link to='reviews'>Reviews</Link>
        </li>
          </ul>
      </>)}
      
      <Outlet />
    </>
  );
};

export default MoviesDetails;
