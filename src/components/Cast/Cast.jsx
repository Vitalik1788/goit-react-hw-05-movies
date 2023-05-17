import { fetchCast } from 'fetch/FetchApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastContainer, CastCard } from './Cast.styled';

const Cast = () => {
  const [casts, setCasts] = useState(null);
  const [error, setError] = useState('');
  const { moviesId } = useParams();

  useEffect(() => {
    if (moviesId === null) {
      return;
    }

    const getCasts = async () => {
      try {
        const data = await fetchCast(moviesId);
        setCasts(data.cast);
      } catch (error) {
        setError(error);
      }
    };
    getCasts();
  }, [moviesId]);

  return (
    <>
      {error && <div>{error}</div>}
      {casts && (
        <CastContainer>
          {casts.map(cast => {
            return (
              <CastCard key={cast.cast_id}>
                <img
                  src={
                    cast.profile_path !== null
                      ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                      : 'https://i.pinimg.com/originals/a0/57/48/a05748c84d7093e382c560bbc57665ce.jpg'
                  }
                  alt={`${cast.name}`}
                  width={200}
                  height={300}
                  loading="lazy"
                />
                <p>{cast.name}</p>
                <p>Character: {cast.character}</p>
              </CastCard>
            );
            
          })}
        </CastContainer>
      )}
    </>
  );
};

export default Cast;
