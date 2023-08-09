import { useEffect, useState } from 'react';
import { fetchMovies } from 'utils/fetchMovies';
import { MoviesList } from 'components/moviesList';
import { Blocks } from 'components/loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return getMoviesList;
  }, []);

  const getMoviesList = async () => {
    setIsLoading(true);
    try {
      const { data } = await fetchMovies();
      setMovies(data.results);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Blocks />}
      <MoviesList movies={movies}></MoviesList>
    </>
  );
};

export default Home;
