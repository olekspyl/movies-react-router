import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'utils/fetchCast';
import { CastComponent } from 'components/castComponent';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const loadCast = async () => {
      try {
        const resp = await fetchCast(movieId);
        setCast(resp.data.cast);
      } catch (error) {
        console.log(error.message);
      } finally {
        controller.abort();
      }
    };
    loadCast();
  }, [movieId]);

  return (
    <>
      {cast && <CastComponent cast={cast}></CastComponent>}
      {!cast && <p>Sorry, there is no information about cast</p>}
    </>
  );
};

export default Cast;
