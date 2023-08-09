import axios from "axios";
import {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CastComponent from "components/CastComponent";
import { CastList} from "components/App.styled";

const Cast = () => {
    const [casts, setCasts] = useState(null);
    const { movieId } = useParams();


useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=022b72fb5c3086143a7c2d5ac5a186e1`).then(
            response => setCasts(response.data.cast)
    ).catch(error => console.log(error));
    
}, [movieId]);  
 
    if (!casts) {
        return;
    }
    console.log(casts)
    
    return (
        <CastList>
            <CastComponent casts={casts} />
        </CastList>
    );
};

export default Cast;
