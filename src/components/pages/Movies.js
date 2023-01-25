import { useState, useEffect } from "react";
import axios from "axios";
import { MoviesList, Movie, MovieLink } from "components/App.styled";
import { Outlet } from "react-router-dom";



const Movies = () => {

    const [popularMovies, setPopularMovies] = useState([]);
  
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=542013762b3531b404b15130444dfd0b`).then(response => 
        setPopularMovies(response.data.results)).catch(error => console.log(error))
        }, [])


    return (
        <MoviesList>{popularMovies.map(({ id, title }) =>
            <Movie key={id} ><MovieLink  to={`${id}`}>{title}</MovieLink></Movie>
        )}
        <Outlet/>
        </MoviesList>
        
      
    )
};

export default Movies;