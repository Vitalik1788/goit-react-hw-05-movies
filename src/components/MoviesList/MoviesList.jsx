import { Link } from 'react-router-dom';
import { MovieList, MovieItem } from './MoviesList.styles';

const MoviesList = ({ movies, location, foundMovies, movieSearchLocation }) => {
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
      {foundMovies && (
        <MovieList>
          {foundMovies.map(movie => {
            return (
              <MovieItem key={movie.id}>
                <Link to={`${movie.id}`} state={{ from: movieSearchLocation }}>
                  <img
                    src={
                      movie.poster_path !== null
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : 'https://i.pinimg.com/originals/a0/57/48/a05748c84d7093e382c560bbc57665ce.jpg'
                    }
                    alt={`${movie.title && movie.original_title}`}
                    width={200}
                    height={300}
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

export default MoviesList;
