import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  // console.log(location);
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <p>{movie.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
