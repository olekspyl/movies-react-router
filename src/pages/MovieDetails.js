import { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { fetchOneMovie } from 'utils/fetchOneMovie';
import { Movie } from 'components/movie';
import { Blocks } from 'components/loader';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieObj, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const loadOneMovie = async () => {
      try {
        const { data } = await fetchOneMovie(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    loadOneMovie();
  }, [movieId]);

  return (
    <>
      {isLoading && <Blocks />}
      {movieObj && <Movie movie={movieObj}></Movie>}
      <Outlet />
    </>
  );
};

export default MovieDetails;
