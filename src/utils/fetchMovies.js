import axios from 'axios';

// const API_KEY = '022b72fb5c3086143a7c2d5ac5a186e1';
// axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie';
const BASE_URL = 'https://api.themoviedb.org/3/movie';

export const fetchMovies = () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjJiNzJmYjVjMzA4NjE0M2E3YzJkNWFjNWExODZlMSIsInN1YiI6IjYzZDA0ZjY2YjdhMTU0MDUxY2U2M2EyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C70BBZoOTjJ3qB7SKuvutphznTOIeAE5e39_YH9TUqY',
    },
  };
  const resp = axios.get(`${BASE_URL}/popular`, options);

  return resp;
};
