import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Blocks } from '../loader';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Find movie</NavLink>
        </nav>
      </header>
      <Suspense fallback={<Blocks></Blocks>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
