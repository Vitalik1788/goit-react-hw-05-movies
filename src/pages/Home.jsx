import { useEffect, useState } from 'react';
import { fetchTrandingMovies } from 'fetch/FetchApi';
import { Link, useLocation } from 'react-router-dom';

const HomePage = () => {
  const [movies, setMovies] = useState();
  const [error, setError] = useState();
  const location = useLocation()

  useEffect(() => {
    const onFetchMovies = async () => {
      try {
        const trandingMovies = await fetchTrandingMovies();
        setMovies(trandingMovies.results);
      } catch (error) {
        setError(error.message);
      }
    };
    onFetchMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {error && <div>{error}</div>}
      {movies && (
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location}}>{movie.title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default HomePage;
