import axios from 'axios';

const API_KEY = '022b72fb5c3086143a7c2d5ac5a186e1';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchSearchedFilm = query => {
  const resp = axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`);

  return resp;
};
