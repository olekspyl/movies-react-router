import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import { FormContainer, Button, Input } from "components/App.styled";



const Movies = () => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=542013762b3531b404b15130444dfd0b&query=${query}`).then(
            response => console.log(response.data.results)
        ).catch(error => console.log(error));
    }, [query]);

    //  if (!query) {
    //     return;
    // }

    const onQueryChange = e => {
        setQuery(e.target.value);
    }



    const onSubmit = e => {
        e.preventDefault();



        setQuery('');
    }



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
        <Button type="button">Search</Button>
        <Outlet /> 
    </FormContainer>
    )
}

export default Movies;