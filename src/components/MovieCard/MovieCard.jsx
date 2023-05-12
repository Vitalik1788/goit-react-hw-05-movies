import { CardContainer, CardText, GenresList } from './MovieCard.styled';

const MovieCard = ({ moviesCard }) => {
  const { release_date, poster_path, title, overview, genres, vote_average } =
    moviesCard;
  const year = new Date(release_date);
  let releaseDate = year.getFullYear();
  let moviesRating = Math.round(Number(`${vote_average}`) * 10);

  return (
    <>
      <CardContainer>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={`${title}`}
          width={400}
        />
        <CardText>
          <h1>
            {title} ({releaseDate})
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

export default MovieCard;
