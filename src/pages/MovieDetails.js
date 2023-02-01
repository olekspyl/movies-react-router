import { useState, useEffect } from "react";
import { useParams, Outlet, useLocation } from "react-router-dom";
import axios from "axios";
import MovieComponent from "components/MovieComponent";
import ButtonBackComponent from "components/ButtonBackComponent";


const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();
 
    
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=542013762b3531b404b15130444dfd0b`).then(
            response => setMovie(response.data)
        ).catch(error => console.log(error));
    }, [movieId]);


    if (!movie) {
        return;
    };
    


    return (      
        <>
        <ButtonBackComponent location={location } />
            <MovieComponent movie={movie} />
        <Outlet/>
     </>
    );
};

export default MovieDetails;