import { fetchSearchMovie } from 'fetch/FetchApi';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MoviesSearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [foundMovies, setFoundMovies] = useState([]);
  const [error, setError] = useState();

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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          value={searchQuery}
          placeholder="Enter movie name"
          onChange={e => setSearchQuery(e.currentTarget.value.toLowerCase())}
        />
        <button type="submit">Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {foundMovies && (<ul>
        {foundMovies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`${movie.id}`}>{movie.title}</Link>
            </li>
          );})}
      </ul>)       }
    </>
  );
};

export default MoviesSearchForm;
