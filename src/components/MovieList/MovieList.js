import { MovieLink, Movie, MoviesList } from "components/App.styled";
// import MovieComponent from "components/MovieComponent";


const MovieList = ({ movies }) => {

    return (
        <MoviesList>{ movies.map(({ id, title }) =>
        <Movie key={id} ><MovieLink  to={`/movies/${id}`}>{title}</MovieLink></Movie>
        )}
            
        </MoviesList>
)}

export default MovieList;
