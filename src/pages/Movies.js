import { useEffect, useState } from 'react';
import { fetchMovies } from 'fetchMovies';
import { MoviesList } from 'components/moviesList/MoviesList';

export const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    return getMoviesList;
  }, []);

  const getMoviesList = async () => {
    try {
      const { data } = await fetchMovies();
      setMovies(data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  return <MoviesList movies={movies}></MoviesList>;
};
