
import { MoviesList, Movie, MovieLink } from "components/App.styled";

const MovieList = ({ movies }) => {
    
    return (
        <MoviesList>
            {movies.map(({id, title}) => {
                return <Movie key={id}>
                     <MovieLink to={`/movies/${id}`}>{title}</MovieLink></Movie>
            })}
    </MoviesList>
)

}

export default MovieList;

 