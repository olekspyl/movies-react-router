import { NavLink } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <NavLink to={`/movies/${movie.id}`}>
            <p>{movie.title}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
