import { CardContainer, CardText, GenresList } from './MovieCard.styled';

const MovieCard = ({ moviesCard }) => {
  const { release_date, poster_path, title, overview, genres, vote_average } =
    moviesCard;

  const year = new Date(release_date);
  let releaseDate = year.getFullYear();
  

  return (
    <CardContainer>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={`${title}`}
        width={300}
      />
      <CardText>
        <h3>
          {title} ({releaseDate})
        </h3>
        <p>User Score: {vote_average} </p>
        <h4>Overview</h4>
        <p>{overview}</p>
        <h4>Genres</h4>
        <GenresList>
          {genres.map(genres => {
            return <li key={genres.id}>{genres.name}</li>;
          })}
        </GenresList>
      </CardText>
    </CardContainer>
  );
};

export default MovieCard;
