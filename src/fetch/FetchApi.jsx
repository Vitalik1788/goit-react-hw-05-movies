import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';

const API_KEY = '41b8f9437bf3f899281f8a3f9bdc0891';

export const fetchTrandingMovies = async () => {
  const response = await axios.get(`/3/trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

export const fetchMoviesDetails = async moviesId => {
  const response = await axios.get(
    `/3/movie/${moviesId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const fetchCast = async moviesId => {
  const response = await axios.get(
    `3/movie/${moviesId}/credits?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
};
