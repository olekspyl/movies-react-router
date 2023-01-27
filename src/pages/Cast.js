import axios from "axios";
import {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CastList, CastItem, CastName} from "components/App.styled";

const Cast = () => {
    const [casts, setCasts] = useState(null);
    const { movieId } = useParams();


useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=542013762b3531b404b15130444dfd0b`).then(
            response => setCasts(response.data.cast)
    ).catch(error => console.log(error));
    
}, [movieId]);  
 
    if (!casts) {
        return;
    }

     const getCastFaceURL = (profile_path) => {
        return `https://www.themoviedb.org/t/p/w66_and_h66_face${profile_path}`
    }
  
    const unpackedCasts = () => casts.map(cast => {
        return <CastItem key={cast.id}>
                <img src={getCastFaceURL(cast.profile_path)} alt={cast.name} />
                <CastName>{cast.name}</CastName>
                <p>as {cast.character}</p>
            </CastItem>
    
    });
 
return (
    <CastList>
        {unpackedCasts()}
        </CastList>
        
    )
};

export default Cast;