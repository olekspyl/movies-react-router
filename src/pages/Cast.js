import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'utils/fetchCast';
import { CastComponent } from 'components/cast';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const loadCast = async () => {
      try {
        const resp = await fetchCast(movieId);
        setCast(resp.cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    loadCast();
  }, [movieId]);

  return <>{cast && <CastComponent cast={cast}></CastComponent>}</>;
};

export default Cast;
