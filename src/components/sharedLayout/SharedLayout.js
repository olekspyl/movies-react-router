import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// import { Header } from 'components/header';
// import { Container } from 'components/container';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
