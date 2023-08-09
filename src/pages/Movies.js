import { useEffect, useState } from 'react';
import { Outlet, useParams, useSearchParams } from 'react-router-dom';
import { fetchSearchedFilm } from 'utils/fetchSearchedFilm';
import { FilmSearch } from 'components/filmSearch';
import { MoviesList } from 'components/moviesList';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchedFilms, setSearchedFilms] = useState([]);
  const [submit, setSubmit] = useState(false);

  const { movieId } = useParams();
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const loadMovie = async () => {
      try {
        if (submit) {
          const { data } = await fetchSearchedFilm(query);
          setSearchedFilms(data.results);
        }
      } catch (error) {
        console.log(error.message);
      }

      setSubmit(false);
    };
    loadMovie();
  }, [query, submit]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleClick = () => {
    setSubmit(true);
    setSearchParams({ query: query });
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleClick();
  };

  return (
    <>
      {!movieId ? (
        <FilmSearch
          handleChange={handleChange}
          handleClick={handleClick}
          handleSubmit={handleSubmit}
          query={query}
        />
      ) : (
        <Outlet />
      )}
      <MoviesList movies={searchedFilms} />
    </>
  );
};

export default Movies;
