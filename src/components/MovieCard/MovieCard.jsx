import { CardContainer, CardText, GenresList } from './MovieCard.styled';
import PropTypes from 'prop-types';

const MovieCard = ({ moviesCard }) => {
  const {
    release_date,
    poster_path,
    title,
    overview,
    genres,
    vote_average,
    original_title,
  } = moviesCard;
  const year = new Date(release_date);
  let releaseDate = year.getFullYear();
  let moviesRating = Math.round(Number(`${vote_average}`) * 10);

  return (
    <>
      <CardContainer>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://i.pinimg.com/originals/a0/57/48/a05748c84d7093e382c560bbc57665ce.jpg'
          }
          alt={`${title && original_title}`}
          width={400}
        />
        <CardText>
          <h1>
            {original_title && title} ({releaseDate})
          </h1>
          <p>User Score: {moviesRating}% </p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <GenresList>
            {genres.map(genres => {
              return <li key={genres.id}>{genres.name}</li>;
            })}
          </GenresList>
        </CardText>
      </CardContainer>
    </>
  );
};

MovieCard.propTypes = {
  moviesCard: PropTypes.shape({
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.object),
    vote_average: PropTypes.number.isRequired,
  }),
};

export default MovieCard;
