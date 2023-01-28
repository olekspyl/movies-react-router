import { Outlet, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import { FormContainer, Button, Input } from "components/App.styled";

const Movies = () => {
    const [query, setQuery] = useState('');
    const [submit, setSubmit] = useState(false);
    const [movies, setMovies] = useState([]);

     const { movieId } = useParams();

    useEffect(() => {
        if (submit) { 
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=542013762b3531b404b15130444dfd0b&query=${query}`).then(
            response => setMovies(response.data.results)
        ).catch(error => console.log(error));
        } 
        setSubmit(false);
        
    }, [query, submit]);
    



    const onQueryChange = e => {
        setQuery(e.target.value);
    }

    const onHandleClick = () => {
        setSubmit(true);
    }


    const onSubmit = e => {
        e.preventDefault();
        onHandleClick();
        console.log(movies)
    }


    if (!movieId) {
    return (
        
    <FormContainer>
        <form onSubmit={onSubmit}>
            <label>
                    <Input type="text"
                        value={query}
                        onChange={onQueryChange}>
                </Input>
            </label>
        </form>
        <Button type="button" onClick={onHandleClick}>Search</Button>
         
    </FormContainer>
    )
    } else {
        return <Outlet />
}
    
}

export default Movies;