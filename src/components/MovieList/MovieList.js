import { MoviesList} from "components/App.styled";
import MovieComponent from "components/MovieComponent";


const MovieList = ({ movies }) => {


    return (
        <MoviesList>
            {movies.map(({id}) => {
                return <MovieComponent
                    key={id}/>
            }
             
                )
            }
    </MoviesList>
)}

export default MovieList;

//  return (
//         <MoviesList>
//             {movies.map(({id, title}) => {
//                 return <Movie key={id}>
//                      <MovieLink to={`/movies/${id}`}>{title}</MovieLink></Movie>
//             })}
//     </MoviesList>
// )
 