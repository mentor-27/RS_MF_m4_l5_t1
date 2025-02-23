import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from '../../context';

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth();
  const location = useLocation();

  if (auth?.user === null) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return children;
};
