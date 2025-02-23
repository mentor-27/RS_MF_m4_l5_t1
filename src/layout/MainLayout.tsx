import { NavLink, Outlet } from 'react-router-dom';

import { intrenalRoutes } from '../routes.ts';
import { JDButton } from '../components/UI';
import { useAuth } from '../context';

export const MainLayout = () => {
  const auth = useAuth();

  return (
    <>
      <ul>
        <li>
          <NavLink to={intrenalRoutes.home}>Home</NavLink>
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
            <NavLink to={intrenalRoutes.login}>Login</NavLink>
          )}
        </li>
      </ul>
      <Outlet />
    </>
  );
};
