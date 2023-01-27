import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import { FormContainer, Button, Input } from "components/App.styled";



const Movies = () => {
    const [query, setQuery] = useState('');
    const [submit, setSubmit] = useState(false);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (submit) { 
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=542013762b3531b404b15130444dfd0b&query=${query}`).then(
            response => setMovies(response.data)
        ).catch(error => console.log(error));
        } 
        
        
    }, [query, submit, movies]);


    const onQueryChange = e => {
        setQuery(e.target.value);
    }



    const onSubmit = e => {
        e.preventDefault();
        setSubmit(true);
        console.log(movies)
    }



    return (
    <FormContainer>
        <form >
            <label>
                    <Input type="text"
                        value={query}
                        onChange={onQueryChange}>
                </Input>
            </label>
        </form>
        <Button type="button" onClick={onSubmit}>Search</Button>
        <Outlet /> 
    </FormContainer>
    )
}

export default Movies;