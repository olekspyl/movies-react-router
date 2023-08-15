import { Link } from 'react-router-dom';

export const BackButton = ({ location }) => {
  //   const location = useLocation();

  return (
    <button type="button">
      <Link to={location}>Back</Link>
    </button>
  );
};
