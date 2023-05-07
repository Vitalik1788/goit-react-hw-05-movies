import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesDetails } from 'fetch/FetchApi';
import { Link } from 'react-router-dom';

const MoviesDetails = () => {
  const [moviesCard, setMoviesCard] = useState();
  const [error, setError] = useState();
  const { moviesId } = useParams();

  useEffect(() => {
    const moviesDetails = async () => {
      try {
        const data = await fetchMoviesDetails(moviesId);
        console.log(data);
        setMoviesCard(data);
      } catch (error) {
        setError(error.message);
      }
    };
    moviesDetails();
  }, [moviesId]);

  return (
    <>
      <button type="button">
        {' '}
        <Link to={`/`}>Back to homepage</Link>{' '}
      </button>
      {error && <h2>{error}</h2>}
      {moviesCard && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${moviesCard.poster_path}`}
            alt={`${moviesCard.title}`}
            width={300}
          />
          <div>
            <h3>{moviesCard.title}</h3>
            <p>User Score: </p>
            <h4>Overview</h4>
            <p>{moviesCard.overview}</p>
            <h4>Genres</h4>
            {moviesCard.genres.map(genres => {
              return <p key={genres.id}>{genres.name}</p>;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default MoviesDetails;
