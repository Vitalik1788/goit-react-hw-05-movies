import { Link } from 'react-router-dom';
import { MovieList, MovieItem } from './MoviesList.styles';



const MoviesList = ({ movies, location }) => {
  
  return (
    <MovieList>
      {movies.map(movie => {
        return (
          <MovieItem key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`${movie.title}`}
                width={200}
              />
              <p>{movie.title}</p>
            </Link>
          </MovieItem>
        );
      })}
    </MovieList>
  );
};

export default MoviesList;
