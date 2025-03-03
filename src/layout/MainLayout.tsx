import { Suspense } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

import { intrenalRoutes } from '../routes.ts';
import { JDButton } from '../components/UI';
import { useAuth } from '../context';
import { ErrorBoundary } from '../hoc';

export const MainLayout = () => {
  const location = useLocation();
  const auth = useAuth();

  return (
    <>
      <ul>
        <li>
          <NavLink to={intrenalRoutes.home} end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={intrenalRoutes.characters}>Characters</NavLink>
        </li>
        <li>
          <NavLink to={intrenalRoutes.locations}>Locations</NavLink>
        </li>
        <li>
          <NavLink to={intrenalRoutes.episodes}>Episodes</NavLink>
        </li>
        <li>
          {auth?.user ? (
            <>
              <span style={{ marginRight: '1rem' }}>Hi, {auth?.user}</span>
              <JDButton onClick={auth.signout}>Logout</JDButton>
            </>
          ) : (
            <NavLink to={intrenalRoutes.login} end>
              Login
            </NavLink>
          )}
        </li>
      </ul>
      <ErrorBoundary>
        <Suspense fallback={<h2>Let me think...</h2>} key={location.key}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
