import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";



const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();


    
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=542013762b3531b404b15130444dfd0b`).then(
            response => setMovie(response.data)
        ).catch(error => console.log(error));
    }, [movieId]);

    if (!movie) {
        return;
    }
    const {title, release_date, vote_average, overview, genres} = movie;
    const allGenres = genres.map(genre => genre.name+" ");

    
    return (
        <div>
            {/* <img src={movie.belongs_to_collection.poster_path} alt={movie.belongs_to_collection.backdrop_path}/> */}
            <h1>{title }</h1>
            <p>{release_date}</p>
            <p>{Number.parseInt(vote_average * 100 / 10)}%</p>
            <p>{overview }</p>
            <p>{allGenres}</p>
            <h2>Additional information</h2>
            {/* <NavLink to={`${movieId/cast}`}></NavLink> */}
            <NavLink></NavLink>
        </div>
    )
};

export default MovieDetails;