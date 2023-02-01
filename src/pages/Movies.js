import { useState, useEffect } from "react";
import { Outlet, useParams, useSearchParams} from "react-router-dom"
import axios from "axios";
import InputComponent from "components/InputComponent";
import MovieList from "components/MovieList";

const Movies = () => {
    const [query, setQuery] = useState('');
    const [submit, setSubmit] = useState(false);
    const [movies, setMovies] = useState([]);
    const { movieId } = useParams();
    // eslint-disable-next-line
    const [searchParams, setSearchParams] = useSearchParams();


    useEffect(() => {
        if (submit) {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=542013762b3531b404b15130444dfd0b&query=${query}`).then(
                response => setMovies(response.data.results)
            ).catch(error => console.log(error)).finally(<p> Sorry, try another query</p>);
            setSubmit(false);
            setQuery('');}
    }, [query, submit]);
    

    const onQueryChange = e => {
        setQuery(e.target.value);
    };

    const onHandleClick = () => {
        setSubmit(true);
        setSearchParams({ query: query })
    };


    const onSubmit = e => {
        e.preventDefault();
        onHandleClick();
    };



return (
    <div>
        {!movieId
            ? <InputComponent onQueryChange={onQueryChange} onHandleClick={onHandleClick} onSubmit={onSubmit} query={query} />
            : <Outlet />}
        <MovieList movies={movies} />

        
    </div>
);
};

export default Movies;