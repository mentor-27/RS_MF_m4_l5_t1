import { NavLink, Route, Routes } from 'react-router-dom';

import {
  Episodes,
  Characters,
  Home,
  Locations,
  Character,
  Location,
  Episode,
  NotFound,
} from './pages';
import { intrenalRoutes } from './routes.ts';
import './App.css';

function App() {
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
      </ul>
      <Routes>
        <Route path={intrenalRoutes.home} element={<Home />} />
        <Route path={intrenalRoutes.characters} element={<Characters />} />
        <Route path={intrenalRoutes.character(':id')} element={<Character />} />
        <Route path={intrenalRoutes.locations} element={<Locations />} />
        <Route path={intrenalRoutes.location(':id')} element={<Location />} />
        <Route path={intrenalRoutes.episodes} element={<Episodes />} />
        <Route path={intrenalRoutes.episode(':id')} element={<Episode />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
