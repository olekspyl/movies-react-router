import axios from 'axios';

// const API_KEY = '022b72fb5c3086143a7c2d5ac5a186e1';
// axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const BASE_URL = 'https://api.themoviedb.org/3';
const controller = new AbortController();

export const fetchSearchedFilm = query => {
  const options = {
    method: 'GET',
    signal: controller.signal,
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjJiNzJmYjVjMzA4NjE0M2E3YzJkNWFjNWExODZlMSIsInN1YiI6IjYzZDA0ZjY2YjdhMTU0MDUxY2U2M2EyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C70BBZoOTjJ3qB7SKuvutphznTOIeAE5e39_YH9TUqY',
    },
  };
  const resp = axios.get(`${BASE_URL}/search/movie?query=${query}`, options);

  return resp;
};