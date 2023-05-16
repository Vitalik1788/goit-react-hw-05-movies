import { fetchSearchMovie } from 'fetch/FetchApi';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const MoviesSearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [foundMovies, setFoundMovies] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const searchQuery = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    const userMoviesList = async e => {
      try {
        const data = await fetchSearchMovie(searchQuery);
        setFoundMovies(data.results);
      } catch (error) {
        setError(error.message);
      }
    };
    userMoviesList();
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: inputValue.toLowerCase() });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          value={inputValue}
          placeholder="Enter movie name"
          onChange={e => setInputValue(e.currentTarget.value)}
        />
        <button type="submit">Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {foundMovies && (
        <ul>
          {foundMovies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`${movie.id}`} state={{ from: location }}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={`${movie.title}`}
                    width={200}
                  />
                  <p>{movie.title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default MoviesSearchForm;