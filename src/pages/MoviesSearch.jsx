import { fetchSearchMovie } from 'fetch/FetchApi';
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const MoviesSearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [foundMovies, setFoundMovies] = useState([]);
  const [error, setError] = useState();

  const searchQuery = searchParams.get('query') ?? '';
  const location = useLocation();

  const updateQueryString = e => {
    const queryValue = e.currentTarget.value;
    if (queryValue.trim() === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: queryValue.toLowerCase() });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      return;
    }
    try {
      const data = await fetchSearchMovie(searchQuery);
      setFoundMovies(data.results);
    } catch (error) {
      setError(error.message);
    }
  };

  console.log(location);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          value={searchQuery}
          placeholder="Enter movie name"
          onChange={updateQueryString}
        />
        <button type="submit">Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {foundMovies && (
        <ul>
          {foundMovies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`${movie.id}`} state={{from: location}}>{movie.title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default MoviesSearchForm;
