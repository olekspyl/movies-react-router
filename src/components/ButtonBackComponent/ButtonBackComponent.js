import { Link } from 'react-router-dom';
import { Button } from './Button.styled';

const ButtonBackComponent = ({ location }) => {
  //   const location = useLocation();

  return (
    <Button type="button" className="btn btn-outline-dark">
      <Link to={location}>Back</Link>
    </Button>
  );
};

export default ButtonBackComponent;
