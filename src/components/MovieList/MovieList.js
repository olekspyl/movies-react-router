import { useLocation } from 'react-router';
import { MovieLink, Movie, MoviesList } from 'components/App.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <MoviesList>
      {movies.map(({ id, title }) => (
        <Movie key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </MovieLink>
        </Movie>
      ))}
    </MoviesList>
  );
};

export default MovieList;
