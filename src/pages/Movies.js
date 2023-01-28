import { useState, useEffect } from "react";
import { Outlet, useParams, useSearchParams} from "react-router-dom"
import axios from "axios";
import { FormContainer, Button, Input} from "components/App.styled";
import MovieList from "components/MovieList";

const Movies = () => {
    const [query, setQuery] = useState('');
    const [submit, setSubmit] = useState(false);
    const [movies, setMovies] = useState([]);

    const { movieId } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
    try
        {if (submit) {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=542013762b3531b404b15130444dfd0b&query=${query}`).then(
            response => setMovies(response.data.results)
        ).catch(error => console.log(error));
            setSubmit(false);
        setQuery('');}
    } finally {<p> Sorry, try another query</p>}
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
        console.log(movies)
    };



    return (
        <div>
            {!movieId ? (<FormContainer>
                <form onSubmit={onSubmit}>
                    <label>
                        <Input type="text"
                            value={query}
                            onChange={onQueryChange}>
                        </Input>
                    </label>
                </form>
                <Button type="button" onClick={onHandleClick}>Search</Button>
            </FormContainer>)
                : <Outlet />}
            {movies && <MovieList movies={movies} />}

            
        </div>
    );
};

export default Movies;