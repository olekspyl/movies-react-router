import axios from 'axios';

const API_KEY = '022b72fb5c3086143a7c2d5ac5a186e1';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie';

export const fetchMovies = () => {
  const resp = axios.get(`/popular?api_key=${API_KEY}`);

  return resp;
};
