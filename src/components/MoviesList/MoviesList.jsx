import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieList, MovieItem } from './MoviesList.styles';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      {movies && (
        <MovieList>
          {movies.map(movie => {
            return (
              <MovieItem key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : 'https://i.pinimg.com/originals/a0/57/48/a05748c84d7093e382c560bbc57665ce.jpg'
                    }
                    alt={`${movie.title && movie.original_title}`}
                    width={200}
                  />
                  <p>{movie.title && movie.original_title}</p>
                </Link>
              </MovieItem>
            );
          })}
        </MovieList>
      )}
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ),
};

export default MoviesList;
