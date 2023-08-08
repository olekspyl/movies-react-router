import { useEffect, useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchOneMovie } from 'utils/fetchOneMovie';

export const Movie = () => {
  const { movieId } = useParams();
  const [movieObj, setMovie] = useState({});

  const loadOneMovie = useCallback(async () => {
    try {
      const { data } = await fetchOneMovie(movieId);
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  }, [movieId, setMovie]);

  useEffect(() => {
    return loadOneMovie;
  }, [loadOneMovie]);

  const {
    original_title,
    vote_average,
    overview,
    // genres,
    poster_path,
    release_date,
  } = movieObj;
  const userScore = Math.round(vote_average * 10);
  //   const genresNames = genres.map(genre => <li key={genre.id}>{genre.name}</li>);
  const getPosterURL = posterPath => {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posterPath}`;
  };
  const date = new Date(release_date);
  // console.log(movieObj);

  return (
    <>
      <article>
        <h1>
          {original_title} {date.getFullYear()}
        </h1>
        <img loading="lazy" src={getPosterURL(poster_path)} alt="" />
        <p>User Score: {userScore}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        {/* <ul>{genresNames}</ul> */}
        <h4>Additional information</h4>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </article>
    </>
  );
};
