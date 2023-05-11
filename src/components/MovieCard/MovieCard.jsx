import { CardContainer, CardText, GenresList } from './MovieCard.styled';

const MovieCard = ({ moviesCard }) => {

  const { release_date, poster_path, title, overview, genres, vote_average } =
    moviesCard;
  const year = new Date(release_date);
  let releaseDate = year.getFullYear();

  return (
    <>
      
      <CardContainer>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={`${title}`}
          width={400}
        />
        <CardText>
          <h2>
            {title} ({releaseDate})
          </h2>
          <p>User Score: {vote_average} </p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
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
