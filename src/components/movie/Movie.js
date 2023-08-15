import { NavLink } from 'react-router-dom';

export const Movie = ({
  movie: {
    title,
    overview,
    poster_path,
    vote_average,
    release_date,
    genres,
    id,
  },
}) => {
  const userScore = Math.round(vote_average * 10);
  const genresNames = genres.map(genre => <li key={genre.id}>{genre.name}</li>);
  const getPosterURL = posterPath => {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posterPath}`;
  };
  const date = new Date(release_date);

  return (
    <>
      <article>
        <h1>
          {title} {date.getFullYear()}
        </h1>
        <img loading="lazy" src={getPosterURL(poster_path)} alt="" />
        <p>User Score: {userScore}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>{genresNames}</ul>
        <h4>Additional information</h4>
        <ul>
          <li>
            <NavLink to={`/movies/${id}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`/movies/${id}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
      </article>
    </>
  );
};
