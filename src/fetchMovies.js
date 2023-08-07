import axios from 'axios';

// const API_KEY = '542013762b3531b404b15130444dfd0b';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie';

export const fetchMovies = () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDIwMTM3NjJiMzUzMWI0MDRiMTUxMzA0NDRkZmQwYiIsInN1YiI6IjYzZDA0ZjY2YjdhMTU0MDUxY2U2M2EyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IY-RZlB95EXHMlb7LFEyc4rlZwod52mNh_GvKJaHueE',
    },
  };

  const resp = axios.get(`/popular`, options);

  return resp;
};
