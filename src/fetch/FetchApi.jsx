import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';

const API_KEY = '41b8f9437bf3f899281f8a3f9bdc0891';

const fetchTrandingMovies = async () => {
  const response = await axios.get(`/3/trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

const fetchMoviesDetails = async moviesId => {
  const response = await axios.get(
    `/3/movie/${moviesId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

const fetchCast = async moviesId => {
  const response = await axios.get(
    `3/movie/${moviesId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

const fetchMovieReview = async moviesId => {
  const response = await axios.get(
    `3/movie/${moviesId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data;
};

const fetchSearchMovie = async query => {
  const response = await axios.get(
    `3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return response.data;
};

export {
  fetchTrandingMovies,
  fetchMoviesDetails,
  fetchCast,
  fetchMovieReview,
  fetchSearchMovie,
};
