import { useState, useEffect } from "react";
import { useParams, Outlet, useLocation } from "react-router-dom";
import axios from "axios";
import {MovieContainer, MoviePoster, Score, Title, OverviewTitle, Overview, GenresTitle,
    GenresList, AdditionalInfo, GenresItem, CastLink, ReviewsLink, ButtonBack, LinkBack} from "components/App.styled";

const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";
    
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=542013762b3531b404b15130444dfd0b`).then(
            response => setMovie(response.data)
        ).catch(error => console.log(error));
    }, [movieId]);

    
    if (!movie) {
        return;
    };

    const getPosterURL = (posterPath) => {
        return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posterPath}`
    };

    const { title, release_date, vote_average, overview, genres, poster_path } = movie;

    const allGenres = genres.map(genre => <GenresItem key={genre.id}>{genre.name}</GenresItem>);
    
    const date = new Date(release_date);
    

    return (
        <>
        <ButtonBack type="button"><LinkBack state={{ from: backLinkHref }} to={"/"}>Back</LinkBack></ButtonBack>
        <MovieContainer>
            <div>
                <MoviePoster loading="lazy" src={getPosterURL(poster_path)} alt={title} />
            </div>
            <div>
                <Title>{title} {date.getFullYear()}</Title>
                <Score>User score {Number.parseInt(vote_average * 100 / 10)}%</Score>
                <OverviewTitle>Overview</OverviewTitle>
                <Overview>{overview}</Overview>
                <GenresTitle>Genres</GenresTitle>
                <GenresList>{allGenres}</GenresList>
                <AdditionalInfo>Additional information</AdditionalInfo>
                <CastLink to={`/movies/${movieId}/cast`}>Cast</CastLink>
                <ReviewsLink to={`/movies/${movieId}/reviews`}>Reviews</ReviewsLink>
                <Outlet />
            </div>
            </MovieContainer>
            </>
    );
};

export default MovieDetails;