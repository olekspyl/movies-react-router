import { useState, useEffect, useRef } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import axios from 'axios';
import MovieComponent from 'components/MovieComponent';
import ButtonBackComponent from 'components/ButtonBackComponent';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const back = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=022b72fb5c3086143a7c2d5ac5a186e1`
      )
      .then(response => setMovie(response.data))
      .catch(error => console.log(error));
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <>
      <ButtonBackComponent location={back.current} />
      <MovieComponent movie={movie} />
      <Outlet />
    </>
  );
};

export default MovieDetails;
