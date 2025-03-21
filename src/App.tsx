import { Navigate, Route, Routes } from 'react-router-dom';

import {
  Character,
  Characters,
  Episode,
  Episodes,
  Home,
  Location,
  Locations,
  Login,
  NotFound,
} from '@pages';
('./pages/NotFound/NotFound');
import { AuthProvider } from '@context';
import { MainLayout } from './layout/MainLayout';
import { intrenalRoutes } from '@routes';
import { PrivateRoute } from './hoc';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={intrenalRoutes.home} element={<Home />} />
          <Route path={intrenalRoutes.characters} element={<Characters />} />
          <Route
            path={intrenalRoutes.character(':id')}
            element={<Character />}
          />
          <Route path={intrenalRoutes.locations} element={<Locations />} />
          <Route path={intrenalRoutes.location(':id')} element={<Location />} />
          <Route
            path={intrenalRoutes.episodes}
            element={
              <PrivateRoute>
                <Episodes />
              </PrivateRoute>
            }
          />
          <Route
            path={intrenalRoutes.episode(':id')}
            element={
              <PrivateRoute>
                <Episode />
              </PrivateRoute>
            }
          />
          <Route path={intrenalRoutes.login} element={<Login />} />
          <Route path={intrenalRoutes.notFound} element={<NotFound />} />
          <Route path="*" element={<Navigate to={intrenalRoutes.notFound} />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
