import { CastItem, CastName } from "components/App.styled";

const CastComponent = ({casts}) => {

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

    return unpackedCasts();
}

export default CastComponent;
