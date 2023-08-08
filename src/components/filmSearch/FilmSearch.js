import { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchSearchedFilm } from 'utils/fetchSearchedFilm';

export const FilmSearch = () => {
  const [query, setQuery] = useState('');
  const [searchedFilms, setSearchedFilms] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const handleChange = e => {
    setQuery(e.target.value);
    setIsClicked(false);
  };

  const loadMovie = useCallback(async () => {
    try {
      const { data } = await fetchSearchedFilm(query);
      setSearchedFilms(data.results);
    } catch (error) {
      console.log(error.message);
    }
  }, [query, setSearchedFilms]);

  useEffect(() => loadMovie, [loadMovie]);

  const renderMovie = arr => {
    return arr.map(({ id, title }) => {
      return (
        <li key={id}>
          <NavLink to={`/movies/${id}`}>
            <p>{title}</p>
          </NavLink>
        </li>
      );
    });
  };

  const handleClick = e => {
    setQuery('');
    setIsClicked(true);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={query}></input>
      <button type="button" onClick={handleClick}>
        Search
      </button>
      {isClicked && <ul>{renderMovie(searchedFilms)}</ul>}
    </div>
  );
};
