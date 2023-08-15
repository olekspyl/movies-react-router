import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchedFilm } from 'utils/fetchSearchedFilm';
import { FilmSearch } from 'components/filmSearch';
import { MoviesList } from 'components/moviesList';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchedFilms, setSearchedFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      loadMovie(query);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loadMovie(query) {
    const controller = new AbortController();
    try {
      const { data } = await fetchSearchedFilm(query);
      setSearchedFilms(data.results);
    } catch (error) {
      console.log(error.message);
    } finally {
      controller.abort();
    }
  }

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // setQuery(e.target.elements.movie.value);
    setSearchParams({ query: query });
    loadMovie(query);
    setQuery('');
  };

  return (
    <>
      <FilmSearch
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        query={query}
      />
      <MoviesList movies={searchedFilms} />
    </>
  );
};

export default Movies;
