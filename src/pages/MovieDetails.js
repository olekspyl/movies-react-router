import { useEffect, useState, useRef } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchOneMovie } from 'utils/fetchOneMovie';
import { Movie } from 'components/movie';
import { Blocks } from 'components/loader';
import { BackButton } from 'components/backButton';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieObj, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const back = useRef(location.state?.from ?? '/movies');
  console.log(location);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    const loadOneMovie = async () => {
      try {
        const { data } = await fetchOneMovie(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
        controller.abort();
      }
    };
    loadOneMovie();
  }, [movieId]);

  return (
    <>
      {isLoading && <Blocks />}
      <BackButton location={back.current}></BackButton>
      {movieObj && <Movie movie={movieObj}></Movie>}
      <Outlet />
    </>
  );
};

export default MovieDetails;
