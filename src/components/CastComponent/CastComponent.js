import { CastItem, CastName } from "components/App.styled";

const CastComponent = ({casts}) => {



    const getCastFaceURL = (profilePath) => {
        if (!profilePath) {
        return;
    }
        return `https://www.themoviedb.org/t/p/w66_and_h66_face${profilePath}`
    }
  
    const unpackedCasts = () => casts.map(cast => {
        const { id, profile_path, name, character } = cast;
        return <CastItem key={id}>
                <img src={getCastFaceURL(profile_path)} alt={name} />
                <CastName>{name}</CastName>
                <p>as {character}</p>
            </CastItem>
    
    });

    return unpackedCasts();
}

export default CastComponent;
