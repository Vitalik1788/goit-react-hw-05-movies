import { useEffect, useState } from 'react';
import { fetchTrandingMovies } from 'fetch/FetchApi';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [movies, setMovies] = useState();
  const [error, setError] = useState();

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
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default HomePage;
